import express from 'express';

// imports our events listings
import { getEvents } from '../controllers/events.js';

const router = express.Router();


// route to get our events listings
router.get('/', getEvents);
router.get('/', createEvent);

export default router;