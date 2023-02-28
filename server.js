// Import express package
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const PORT = process.env.PORT || 3001;

// Create an instance of the express app
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);