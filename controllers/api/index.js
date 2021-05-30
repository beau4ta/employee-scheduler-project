const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workRoutes = require('./workRoutes');

router.use('/users', userRoutes);
router.use('/work', workRoutes);

module.exports = router;