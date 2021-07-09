const router = require('express').Router();
const userRoutes = require('./userRoutes');
const events = require('./eventRoutes');
const userEventsRoutes = require('./userEventsRoutes');
router.use('/users', userRoutes);
router.use('/userEvents', userEventsRoutes);
router.use('/events', events);
module.exports = router;
