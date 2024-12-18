const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./db/connection');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
const registerRoute = require('./routes/register');

// Use routes
app.use('/register', registerRoute);

// **Start the Server**
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
