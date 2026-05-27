const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Root route - Render checks this to know server is live
app.get('/', (req, res) => {
  res.send('Watchlet Backend is running!');
});

// Example API route - add your old routes here if you had any
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Watchlet API' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
