const express = require('express');
const app = express();
const port = 1234;
const cors = require('cors');

app.use(cors());

const games = [
  require('./api.json'), 
  require('./api1.json'), 
  require('./api2.json')
];

const getRandomInd = () => {
  return parseInt(Math.random() * games.length);
}

app.get('/', (req, res) => {
  res.json(games[getRandomInd()]);
});


app.listen(port, () => console.log(`Awesome app listening on port ${port}!`));