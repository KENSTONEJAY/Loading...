const router = require('express').Router();
const { UserEvents,Event } = require('../../models');

// User-saved fav events
router.post('/', async (req, res) => {
  try {
    const userEventsData = await UserEvents.create(req.body);
    res.status(200).json(userEventsData);
  } catch (err) {
    res.status(400).json(err);
  }
});
//get users fav events
router.get("/", async (req, res) => {
  try {

    const eventData = await UserEvents.find(
      {
        user_id: req.query.userId
      }
    );
    console.log('eventData',eventData);
    let data = [];
    eventData.forEach(async function (events) {
      console.log(events);
      const event = await Event.find({
        event_id : events.event_id
      });    
      console.log('event',event); 
      data.push(event);
    })
    res.json(data);
  }
  catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;