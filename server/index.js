
const express = require('express');
const path = require('path');
const app = express();

const PORT = 3001;
const database = require ('../database/index.js')

app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/listings', function (req, res) {
  database.fetch((err, results) => {
    if(err) {
      console.log(err)
    } else {
      res.send(results)
    }
  });
});

app.listen(PORT, () => console.log('Listening on port: ' + PORT));