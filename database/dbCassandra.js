var cassandra = require('cassandra-driver');

var PlainTextAuthProvider = cassandra.auth.PlainTextAuthProvider;
var client = new cassandra.Client({ contactPoints:['127.0.0.1:9042'],
                                    localDataCenter: 'datacenter1',
                                    authProvider: new PlainTextAuthProvider('cassandra', 'cassandra'),
                                    keyspace: 'mydb'
                                  });

module.exports = {

  getListings: (callback) => {
    client.execute('SELECT * FROM listing_by_neighborhood', (err, data) => {
      if (err) {
        callback(err)
      } else {
        callback(null, data)
      }
    })
  }

}