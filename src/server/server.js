const express = require('express')
const csvtojson = require('csvtojson');
const app = express()
const port = 5000;

var cors = require('cors');
app.use(cors());

const csvfilepath = 'Data.csv';

app.get('/', async (req, res) => {
  const jsonData = await csvtojson().fromFile(csvfilepath);
  res.send(jsonData);
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
