const router = require('express').Router();
const { Work, User } = require('../models');
const withAuth = require('../utils/auth');

// Homepage
router.get('/', async (req, res) => {
    try {

        const workData = await Work.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const workers = workData.map((work) => work.get({ plain: true }));

        res.render('home', {
            workers,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Find individual employees schedule
router.get('/user/:id', async (req, res) => {
    try {
      const workData = await Work.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const work = workData.get({ plain: true });
  
      res.render('calender', {
        ...work,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

