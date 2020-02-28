const faker = require('faker');
const fs = require('fs');

const nearbyImages = ['https://7-xillow.s3-us-west-1.amazonaws.com/img1.jpeg', 'https://7-xillow.s3-us-west-1.amazonaws.com/img2.jpeg',
'https://7-xillow.s3-us-west-1.amazonaws.com/img3.jpeg', 'https://7-xillow.s3-us-west-1.amazonaws.com/img4.jpeg', 'https://7-xillow.s3-us-west-1.amazonaws.com/img5.jpeg',
'https://7-xillow.s3-us-west-1.amazonaws.com/img6.jpeg', 'https://7-xillow.s3-us-west-1.amazonaws.com/img7.jpeg'
]

const writeNeighborhoods = fs.createWriteStream('dataNeighborhood.csv');
writeNeighborhoods.write('id,transit_score,walk_score\n', 'utf8');

function writeTenMillionNeighborhoods(writer, encoding, callback) {
  let i = 1250002;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id++;
      const transit_score = faker.random.number(100)
      const walk_score = faker.random.number(100)
      const data = `${id},${transit_score},${walk_score}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionNeighborhoods(writeNeighborhoods, 'utf-8', () => {
  writeNeighborhoods.end();
});

const writeListings = fs.createWriteStream('dataListing.csv');
writeListings.write('id,neighborhood_id,price,sqft,bed_number,bath_number,listing_address,images\n', 'utf8');

let neighborhoodId = 1;

function writeTenMillionListings(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      if (i % 8 === 0) {
        neighborhoodId++;
      }
      id++;
      const neighborhood_id = neighborhoodId
      const price = faker.commerce.price(1000000)
      const sqft = faker.random.number(6000)
      const bed_number = faker.random.number(6)
      const bath_number = faker.random.number(6)
      const listing_address = faker.address.streetAddress("###")
      const images = nearbyImages[Math.floor(Math.random() * 7)]
      const data = `${id},${neighborhood_id},${price},${sqft},${bed_number},${bath_number},${listing_address},${images}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()

}

writeTenMillionListings(writeListings, 'utf-8', () => {
  writeListings.end();
});
console.log('done seeding!');
// 'https://7-xillow.s3-us-west-1.amazonaws.com/clearImage1.png'  this is the map view