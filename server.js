const express = require('express');
const fetch = require('node-fetch');
const { QUOTE_API_URL } = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/random-quote', async (req, res) => {
  try {
    const response = await fetch(QUOTE_API_URL);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
