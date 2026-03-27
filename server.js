const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Shared state — mutated by index.js
const state = {
    status: 'disconnected',   // 'disconnected' | 'connecting' | 'connected'
    pairingCodes: {},         // { [phoneNumber]: { code, timestamp } }
    client: null,
};

// GET /api/status — current connection status
app.get('/api/status', (req, res) => {
    res.json({ status: state.status });
});

// POST /api/request-pairing — request an 8-digit pairing code
app.post('/api/request-pairing', async (req, res) => {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
        return res.status(400).json({ error: 'phoneNumber is required' });
    }

    // Sanitise: digits only
    const sanitised = String(phoneNumber).replace(/\D/g, '');
    if (!sanitised || sanitised.length < 7) {
        return res.status(400).json({ error: 'Invalid phone number' });
    }

    if (!state.client) {
        return res.status(503).json({ error: 'WhatsApp client is not ready yet. Please wait and try again.' });
    }

    if (state.status === 'connected') {
        return res.status(400).json({ error: 'Already connected. No pairing needed.' });
    }

    try {
        const code = await state.client.requestPairingCode(sanitised, 'JUSTIN24');
        state.pairingCodes[sanitised] = { code, timestamp: Date.now() };
        return res.json({ code });
    } catch (err) {
        console.error('[server] requestPairingCode error:', err);
        return res.status(500).json({ error: 'Failed to generate pairing code. Make sure the number is correct and try again.' });
    }
});

// GET /api/pairing-status — check whether pairing is complete
app.get('/api/pairing-status', (req, res) => {
    res.json({
        paired: state.status === 'connected',
        status: state.status,
    });
});

function startServer() {
    app.listen(PORT, () => {
        console.log(`[server] Web interface running on http://localhost:${PORT}`);
    });
}

module.exports = { app, state, startServer };
