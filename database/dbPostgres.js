const { Pool } = require('pg');
let hostname = 'localhost';
let dbName = 'mydb';

if (process.env.NODE_ENV === 'test') {
  dbName = 'test';
}
if (process.env.NODE_ENV === 'production') {
  hostname = 'database';
}

const pool = new Pool({
  host: hostname,
  user: 'postgres',
  database: dbName,
  port: 5432,
});

pool.on('connect', () => console.log('Connected to the db'));

module.exports = {

    getListing: (id, callback) => {
      pool.query('SELECT * FROM listings LEFT JOIN neighborhoods ON neighborhoods.id = listings.neighborhood_id WHERE listings.id = $1::integer', [id], (err, data) => {
        if (err) {
          callback(err)
        } else {
          callback(null, data)
        }
      })
    },

    deleteListing: (id, callback) => {
      pool.query('DELETE FROM listings WHERE id = $1::integer', [id], (err, data) => {
        if (err) {
          callback(err)
        } else {
          callback(null, data)
        }
      })
    },

    updateListing: (listingInput, callback) => {
      const dataArr = [listingInput];
      pool.query('UPDATE listings SET price = ? WHERE id = $1::integer', dataArr, (err, data) => {
        if (err) {
          callback(err)
        } else {
          callback(null, data)
        }
      })
    },

    addListing: (listingInput, callback) => {
      const dataArr = [listingInput];
      pool.query('INSERT INTO listings(neighborhood_id, price, sqft, bed_number, bath_number, listing_address, images) VALUES ?', dataArr, (err, data) => {
        if (err) {
          callback(err)
        } else {
          callback(null, data)
        }
      })
    },
    
    getNearbyHomes: (neighboroodId, callback) => {
      pool.query('SELECT * FROM listings WHERE neighborhood_id = $1::integer', [neighboroodId], (err, data) => {
        if (err) {
          callback(err)
        } else {
          callback(null, data)
        }
      })
    }

};


// // Event listener for DB connection close
// pool.on('remove', () => {
//   console.log('Client removed');
// });
