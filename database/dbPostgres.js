const { Pool } = require('pg');
let hostname = 'localhost';
let dbName = 'mydb';

if (process.env.NODE_ENV === 'test') {
  dbName = 'test';
}
if (process.env.NODE_ENV === 'production') {
  hostname = 'database';
}
// Postgres login information
const pool = new Pool({
  host: hostname,
  user: 'postgres',
  database: dbName,
  password: null,
  port: 5432,
});
// Event listener for DB connection open
pool.on('connect', () => console.log('Connected to the db'));

module.exports = {
    getAllListings: (id, callback) => {
        pool.query('SELECT * FROM listing WHERE neighborhood_id = ?', id, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    },

    deleteListing: (id, callback) => {
      pool.query('DELETE FROM listing WHERE id = ?', id, (err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, data)
        }
      })
    },

    updateListing: (listingInput, callback) => {
      const dataArr = [listingInput];
      pool.query('UPDATE listing SET price = ? WHERE id = ?', dataArr, (err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, data)
        }
      })
    },

    addListing: (listingInput, callback) => {
      const dataArr = [listingInput];
      pool.query('INSERT INTO listing(neighborhood_id, price, sqft, bed_number, bath_number, listing_address, images) VALUES ?', dataArr, (err, data) => {
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
