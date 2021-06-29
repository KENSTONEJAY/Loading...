const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const userEventsRoutes = require('./userEventsRoutes');

router.use('/user', userRoutes);
router.use('/event', eventRoutes);
router.use('/userEvents', userEventsRoutes);

module.exports = router;
