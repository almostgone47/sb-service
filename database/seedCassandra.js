const cassandra = require('cassandra-driver');
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

var PlainTextAuthProvider = cassandra.auth.PlainTextAuthProvider;
var client = new cassandra.Client({ contactPoints:['127.0.0.1:9042'],
                                    localDataCenter: 'datacenter1', 
                                    authProvider: new PlainTextAuthProvider('cassandra', 'cassandra'),
                                    keyspace: 'mydb'
                                  });

const nearbyImages = ['https://7-xillow.s3-us-west-1.amazonaws.com/img1.jpeg', 'https://7-xillow.s3-us-west-1.amazonaws.com/img2.jpeg',
    'https://7-xillow.s3-us-west-1.amazonaws.com/img3.jpeg', 'https://7-xillow.s3-us-west-1.amazonaws.com/img4.jpeg', 'https://7-xillow.s3-us-west-1.amazonaws.com/img5.jpeg',
    'https://7-xillow.s3-us-west-1.amazonaws.com/img6.jpeg', 'https://7-xillow.s3-us-west-1.amazonaws.com/img7.jpeg'
];

const seedData = (num) => {
  writer.pipe(fs.createWriteStream('data.csv'));
  let neighborhoodId = 1;
  for (let i = 0; i < num; i++) {
    if (i % 8 === 0) {
      neighborhoodId++;
    }
    writer.write({
      neighborhood_id: neighborhoodId,
      listing_id: i,
      price: faker.random.number(3000000),
      sqft: faker.random.number(6000),
      bed_number: faker.random.number(6),
      bath_number: faker.random.number(6),
      listing_address: faker.address.streetAddress("###"),
      images: nearbyImages[Math.floor(Math.random() * 7)],
      transit_score: faker.random.number(100), 
      walk_score: faker.random.number(100) 
    })

}
  writer.end();
  console.log('done');
}
seedData(10000000)