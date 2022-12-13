import express from 'express';

// imports our events listings
import { getEvents } from '../controllers/events.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('THIS WORKS');
})

export default router;