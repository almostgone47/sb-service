//require faker to generate fake data
const faker = require ('faker')


//generate seed data using faker
let data = (num)=> {
    var neighborhoodArray =[];
    for(var i=0; i<num; i++){
       
      var neighborhoodObj ={}
      var address= '';
  
      neighborhoodObj.neighborhood= faker.random.number(),
      neighborhoodObj.mapImage= 'https://7-xillow.s3-us-west-1.amazonaws.com/neighborMap1.png',
      neighborhoodObj.walk_score = faker.random.number(),
      neighborhoodObj.transit_score = faker.random.number(),
      neighborhoodObj.price = faker.random.number(),
      neighborhoodObj.sqft = faker.random.number(),
      neighborhoodObj.bedNumber = faker.random.number(),
      neighborhoodObj.bathNumner = faker.random.number(),
    //   neighborhoodObj.address = faker.address
    address += faker.address.streetAddress() + " ";
    address += faker.address.streetName() + " ";
    address += faker.address.city() + " ";
    address += faker.address.state() + " ";
    address += faker.address.zipCode();

    neighborhoodObj.address = address
    neighborhoodObj.nearbyImage = 'https://7-xillow.s3-us-west-1.amazonaws.com/nearbyHouse1.png'
    neighborhoodArray.push(neighborhoodObj);

    }
    return neighborhoodArray;
}

module.exports.data = data;