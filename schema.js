const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});

let listingSchema = mongoose.Schema({
neighborhood: Number,
walk_score: Number,
transit_score: Number,
nearby_homes: [
    {
        price:Number,
        sqft: Number,
        bedNumber: Number,
        bathNumner: Number,
        address: String

    }
]

});
//google maps api for the map
//nearby homes images
let Repo = mongoose.model('Repo', listingSchema)



