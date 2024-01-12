// server.js
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const app = express();

const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;
const cors = require('cors')



dotenv.config();
mongoose.connect(`${process.env.DBURL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(cors())
app.use(express.json());

// Routes
app.use('/api', apiRoutes);
 
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
 