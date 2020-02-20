const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');

const nearbyImages = ['https://7-xillow.s3-us-west-1.amazonaws.com/img1.jpeg', 'https://7-xillow.s3-us-west-1.amazonaws.com/img2.jpeg',
'https://7-xillow.s3-us-west-1.amazonaws.com/img3.jpeg', 'https://7-xillow.s3-us-west-1.amazonaws.com/img4.jpeg', 'https://7-xillow.s3-us-west-1.amazonaws.com/img5.jpeg',
'https://7-xillow.s3-us-west-1.amazonaws.com/img6.jpeg', 'https://7-xillow.s3-us-west-1.amazonaws.com/img7.jpeg'
]

const seedData = (num) => {
  // writer.pipe(fs.createWriteStream('dataNeighborhood.csv'));
  // for (let i = 0; i < num/8; i++) {
  //   writer.write({
  //     transit_score: faker.random.number(100),
  //     walk_score: faker.random.number(100)
  //   })
  // }
  
  writer.pipe(fs.createWriteStream('dataListing.csv'));
  let neighborhoodId = 1;
  for (let j = 1; j < num; j++) {
    if (j % 8 === 0) {
      neighborhoodId++;
    }
    writer.write({
      neighborhood_id: neighborhoodId,
      price:faker.commerce.price(1000000),
      sqft:faker.random.number(6000),
      bed_number:faker.random.number(6),
      bath_number:faker.random.number(6),
      listing_address: faker.address.streetAddress("###"),
      images:nearbyImages[Math.floor(Math.random() * 7)]
    })
    console.log()
  }
  writer.end();
  console.log('done');
}
seedData(10000000);

// 'https://7-xillow.s3-us-west-1.amazonaws.com/clearImage1.png'  this is the map view