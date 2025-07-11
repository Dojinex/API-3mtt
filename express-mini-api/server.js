const express = require('express');
const app = express();
const PORT = 3000;

// Import routes
const itemRoutes = require('./routes/items');

// Middleware to parse JSON bodies
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Item Routes
app.use('/items', itemRoutes);

// 404 - Not Found handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

