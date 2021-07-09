const router = require('express').Router();
const { Event }  = require('../../models');
const  {uuid} = require('uuidv4');

    //post a new event
router.post("/",  async (req, res) => {
  try {
    let eventReq = req.body;
    eventReq.event_id = uuid ();
    const event = await Event.create(req.body);
    return res.status(200).json(event);
  }
  catch (err) {
    res.status(400).json(err);
  }
});
//get event by state
router.get("/",  async (req, res) => {
  try {
    let where = {};
    if(req.query.stateId){
      if(req.query.stateId.length){
        where = {"event_state" : { $in : req.query.stateId}};
      }else{
        where.event_state = req.query.stateId
      }
      
    }
    if(req.query.eventType){
      where.event_type = req.query.eventType
    }
    const eventData = await Event.find(
        where
    );
    res.json(eventData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;