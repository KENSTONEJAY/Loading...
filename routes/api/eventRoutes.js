const router = require('express').Router();
const Event = require('../../models/Event');


router.get("/eventRoutes", async (req, res) => {
    try {
      
      res.json("eventRoutes");
    }
    catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;