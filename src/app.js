const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');


const { MONGO_CONNECTION_STRING } = require('./common/config.js');


mongoose.connect(MONGO_CONNECTION_STRING)
  .then( () => { console.log('MongoDB connected!');})
  .catch( (error) => { console.log(error);})


const app = express();

const messagesRouter = require('./resources/messages/messages.router');


app.use(cors());
app.use(morgan('dev'));
const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);
app.use(express.urlencoded());

app.use('/api', messagesRouter);

module.exports = app;