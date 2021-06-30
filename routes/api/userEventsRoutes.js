const router = require('express').Router();
const UserEvents = require('../../models/UserEvents');
router.get("/userEvent", async (req, res) => {
    try {
      
      res.json("userEvent");
    }
    catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;
