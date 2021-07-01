const router = require('express').Router();
const { UserEvents } = require('../../models');

// User-saved fav evnets
router.post('/', async (req, res) => {
  try {
    const userEventsData = await UserEvents.create(req.body);
    res.status(200).json(userEventsData);
  } catch (err) {
    res.status(400).json(err);
  }
});