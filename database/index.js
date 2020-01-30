const faker = require ('faker')
const mongoose = require('mongoose');
const fakedata = require ('./fakedata.js')
const data = fakedata.data;
mongoose.connect('mongodb://localhost/7-xillow', {useMongoClient: true});

let listingSchema = mongoose.Schema({

neighborhood: Number,
mapImage: String,
walk_score: Number,
transit_score: Number,
price:Number,
sqft: Number,
bedNumber: Number,
bathNumner: Number,
address: String,
nearbyImage: String

});
//google maps api for the map
//nearby homes images
let Houses = mongoose.model('Houses', listingSchema)

// Houses.insertMany(listingSchema, (err)=> {
//     if(err){
//         console.log(err)
//     } else {
//         console.log("this is a huge sucess")
//     }
// })
let save = (listing)=> {

    var newListing = Houses ({

    neighborhood: listing.neighborhood,
    mapImage: listing.mapImage,
    walk_score: listing.walk_score,
    transit_score: listing.transit_score,
    price:listing.price,
    sqft: listing.sqft,
    bedNumber: listing.bedNumber,
    bathNumner: listing.bathNumner,
    address: listing.address,
    nearbyImage: listing.nearbyImage
    })

    newListing.save((err, newListing) => {
        if(err) {
            console.log(err)
        } else {
            console.log('this was success')
        }
    })
}

//seed mock data
var neighborhoodInfo = data(100)
neighborhoodInfo.forEach(listing => save(listing));

let fetch = (callback) => {
    //get something from the database ...
  Houses.find((err, documents) => {
      if(err) {
        callback (err)
      } else {
        callback( null, documents)
      }
    })

    }

module.exports.save = save;
module.exports.fetch = fetch;