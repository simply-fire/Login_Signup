const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');



//load ev varibales
dotenv.config({ path: './config/config.env' })


// connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());

// routes
app.use('/LSpage', require('./Routes/routes'));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port  ${PORT} `);
})

