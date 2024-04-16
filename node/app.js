const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const playersRouter = require('./routes/players');
const leaguesRouter = require('./routes/leagues');
const countriesRouter = require('./routes/countries');
const teamsRouter = require('./routes/teams');

app.use(bodyParser.json());

app.use('/players', playersRouter);
app.use('/leagues', leaguesRouter);
app.use('/countries', countriesRouter);
app.use('/teams', teamsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;