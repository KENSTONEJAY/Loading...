const router = require('express').Router();
const Event = require('../../models/Event');

router.get("/events", async (req, res) => {
    try {
      
      res.json("evetns");
    }
    catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;