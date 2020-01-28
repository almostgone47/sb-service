const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/7-xillow', {useMongoClient: true});

let listingSchema = mongoose.Schema({

neighborhood: Number,
walk_score: Number,
transit_score: Number,
price:Number,
sqft: Number,
bedNumber: Number,
bathNumner: Number,
address: String

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
    walk_score: listing.walk_score,
    transit_score: listing.transit_score,
    price:listing.price,
    sqft: listing.sqft,
    bedNumber: listing.bedNumber,
    bathNumner: listing.bathNumner,
    address: listing.address
    })

    newListing.save((err, newListing) => {
        if(err) {
            console.log(err)
        } else {
            console.log('this was success')
        }
    })
}

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