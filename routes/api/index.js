const router = require("express").Router();
const evetnRoutes = require("./event");

router.use("/event", evetnRoutes);

module.exports = router;