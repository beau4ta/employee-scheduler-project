const router = require('express').Router();
const { Work, User } = require('../models');
const withAuth = require('../utils/auth');

// Homepage
// WORKS
router.get('/', async (req, res) => {
  res.render('home')
});
          

// All Users
// WORKS but calendar is not displayed
router.get('/calendar', withAuth, async (req, res) => {
  try {

      const workData = await Work.findAll({
          include: [
              {
                  model: User,
                  attributes: ['first_name'],
              },
          ],
      });
      // Serialize data so the template can read it
      const workers = workData.map((work) => work.get({ plain: true }));
      // Pass serialized data and session flag into template
      res.render('calendar', {
          workers,
          logged_in: req.session.logged_in
      });
  } catch (err) {
      res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Work }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Use withAuth middleware to prevent access to route
router.get('/schedule', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findAll( {
        attributes: { exclude: ['password'] },
        include: [{ model: Work }],
      });
     
      const user = userData.map((user) => user.get({plain: true}));

      res.render('scheduler', {
        ...user,
        logged_in: true,
        is_manager: true
      });
      console.log(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Sign-up page
  // WORKS
router.get('/signup', (req, res) => {

  res.render('signup');
});

module.exports = router;

