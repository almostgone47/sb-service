
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db = require ('../database/dbCassandra.js')

app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/listings', function (req, res) {
  db.getListings((err, results) => {
    if(err) {
      console.log(err)
    } else {
      console.log(results[0])
      res.send(results)
    }
  });
});

app.post('/listings', function (req, res) {
  db.addListing((err, results) => {
    if(err) {
      console.log(err)
    } else {
      console.log(results[0])
      res.send(results)
    }
  });
});

app.patch('/listings/:id', function (req, res) {
  db.updateListing((err, results) => {
    if(err) {
      console.log(err)
    } else {
      console.log(results[0])
      res.send(results)
    }
  });
});

app.delete('/listings/:id', function (req, res) {
  db.deleteListing((err, results) => {
    if(err) {
      console.log(err)
    } else {
      console.log(results[0])
      res.send(results)
    }
  });
});

app.listen(port, () => console.log('Listening on port: ' + port));