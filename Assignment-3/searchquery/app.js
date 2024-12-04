// app.js or server.js
const express = require('express');
const app = express();

// Middleware to parse query parameters
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// Sample data for search results
const items = [
  'The Great Gatsby',
  'Inception',
  'Interstellar',
  'The Matrix',
  'The Lord of the Rings'
];

// Route to render search form
app.get('/search', (req, res) => {
  const query = req.query.q || ''; // Get query from URL
  let results = [];

  // If query exists, filter items based on query
  if (query) {
    results = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  }

  // Render search page with the query and results
  res.render('search', { query, results });
});

// Server setup
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
