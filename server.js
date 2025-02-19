const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});

// Proxy endpoint
app.get('/api/crypto', async (req, res) => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=3', {
      headers: {
        'X-CMC_PRO_API_KEY': 'a1cc23d5-55ac-42b0-85c5-1f4f45c73928',
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
