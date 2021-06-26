const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/budget', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(require('./public/js/api'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
