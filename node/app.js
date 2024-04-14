const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const playersRouter = require('./routes/players');

app.use(bodyParser.json());

app.use('/players', playersRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;