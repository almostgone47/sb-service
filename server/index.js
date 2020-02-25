require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 3001;
const db = require ('../database/dbPostgres.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/listing/:id', function (req, res) {
  db.getListing(req.params.id, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(results.rows)
    }
  });
});

app.get('/nearbyHomes', function (req, res) {
  console.log('/nearybyHomes: ', req.query.id)
  db.getNearbyHomes(req.query.id, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(results.rows)
    }
  });
});

app.post('/listings', function (req, res) {
<<<<<<< HEAD
  db.addListing((err, results) => {
    if(err) {
      console.log(err)
    } else {
      console.log(results[0])
=======
  db.addListing(req.body, (err, results) => {
    if(err) {
      console.log(err)
    } else {
>>>>>>> no_csv
      res.send(results)
    }
  });
});

app.patch('/listings/:id', function (req, res) {
  db.updateListing((err, results) => {
    if(err) {
      console.log(err)
    } else {
<<<<<<< HEAD
      console.log(results[0])
=======
      console.log(results)
>>>>>>> no_csv
      res.send(results)
    }
  });
});

app.delete('/listings/:id', function (req, res) {
  db.deleteListing((err, results) => {
    if(err) {
      console.log(err)
    } else {
<<<<<<< HEAD
      console.log(results[0])
=======
      console.log(results)
>>>>>>> no_csv
      res.send(results)
    }
  });
});

app.listen(port, () => console.log('Listening on port: ' + port));