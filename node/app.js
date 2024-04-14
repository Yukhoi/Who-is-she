const express = require('express');

const app = express();

const playersRouter = require('./routes/players');

app.use('/players', playersRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;