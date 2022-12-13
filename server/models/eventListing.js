import mongoose from "mongoose";

const eventSchema = mongoose.Schema({

    title: String,
    plot: String, 
    country: String,
    runningTime:{
        type : Number, 
        default : 0
    },
    date: Date,
    location : String, 
    genre : String,
    image : String
});

const EventListing = mongoose.model('EventListing', eventSchema);

export default EventListing;