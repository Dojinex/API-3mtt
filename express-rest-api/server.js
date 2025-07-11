const express = require('express');
const app = express();
const PORT = 3000;
const itemsRoute = require('./routes/items');

app.use(express.json()); // Middleware to parse JSON

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/items', itemsRoute); // Route handler

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
