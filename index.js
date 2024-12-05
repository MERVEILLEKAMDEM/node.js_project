// Import necessary modules
const express = require('express');
const morgan = require('morgan');

// Initialize the Express application
const app = express();

// Set the view engine and views directory
app.set('views', './views'); // Ensure this path is correct relative to your project structure
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev')); // HTTP request logger
app.use(express.static('./public')); // Serve static files from the public directory

// Routes
app.get('/', (req, res) => {
  res.render('index', { message: 'Hello From Node.js' });
});

app.get('/contact', (req, res) => {
  res.render('index', { message: 'The Contact Page' });
});

app.get('/about', (req, res) => {
  res.render('index', { message: 'The About Page' });
});

// Handle 404 errors
app.get('*', (req, res) => {
  res.status(404).render('index', { message: 'Not Found' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 