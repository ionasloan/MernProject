import EventListing from "../models/eventListing.js";


export const getEvents =  async (req, res) => {
   // res.send('THIS WORKS');
   try{
    const eventListing = await EventListing.find();
    console.log(eventListing);
    res.status(200).json(eventListing);
   }
   catch(error){
    res.status(404).json({message: error.message});
   }
}


export const createEvent = (req, res) =>{
    //res.send('Event Creation');
}