require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const rectangleRoutes = require('./routes/rectangleRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Route for rendering the main form
app.get('/', (req, res) => {
    res.render('index', { perimeter: null, area: null });
});

// Use the rectangle routes
app.use('/rectangle', rectangleRoutes);

// Start the application
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
