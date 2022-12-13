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


export const createEvent = async(req, res) =>{
    //res.send('Event Creation');
    const event = req.body;

    const newEvent = new EventListing(event);

    try{
       await newEvent.save();
        res.status(201).json(newEvent);
       }
       catch(error){
        res.status(409).json({message: error.message});
       }
}