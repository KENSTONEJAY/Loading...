const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const userEventsRoutes = require('./userEventsRoutes');
router.use('/users', userRoutes);
router.use('/userEvents', userEventsRoutes);
module.exports = router;
