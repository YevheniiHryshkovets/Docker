const express = require('express');
const mongoose = require('mongoose');
const corsMiddleware = require('cors');
const questionRoutes = require('./routes/questionRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

require('dotenv').config();

// set up express app
const app = express();

/*
 * Set up middlewares
 */
app.use(express.static('public'));
app.use(express.json());
app.use(corsMiddleware());

// Initialize routes
app.use('/questions', questionRoutes);

// Error handling middleware
app.use(errorMiddleware);

// connect to mongodb geography-db
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    // Listen for requests
    app.listen(process.env.port || 4000, function() {
      console.log('Connected to Mongodb');
      console.log('API listening on port 4000');
      console.log('Server started and wait requests');
    });
  })
  .catch(error => console.log(error));
