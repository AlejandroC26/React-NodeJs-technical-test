const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const app = express();
const path = require('path');
require('dotenv').config();


const appRoutes = require('./routes/app.routes');

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../build')));

// Routes
app.use('/api', appRoutes);

module.exports = app;
