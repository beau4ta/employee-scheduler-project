const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workRoutes = require('./workRoutes');
const calendarRoutes = require('./calendarRoutes');

router.use('/users', userRoutes);
router.use('/work', workRoutes);
router.use('/calendar', calendarRoutes);

module.exports = router;