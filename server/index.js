import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import eventsRoutes from './routes/events.js';

const app = express(); 

//defines our route
app.use('/events', eventsRoutes )

// app.use(bodyParser.json({limit: "30mb, extended: true"}));
// app.use(bodyParser.urlencoded({limit: "30mb, extended: true"}));
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://ourProject:Ourproject6789@cluster0.ops9xxv.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () =>console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false)