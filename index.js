const express = require('express');
const connectDB = require('./src/db');
const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Import routes
const routes = require('./src/routes');

// Use express.json() middleware
app.use(express.json());

// Use the imported routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
