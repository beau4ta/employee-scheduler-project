const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    console.log("here")
    try {
        console.log(req.body);
        const userData = await User.create(req.body);
        

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// TODO GET to find all users
router.get('/', (req, res) => {
    User.findAll({

        attributes:
            [
                "id",
                "first_name",
                "last_name",
                "email",
                "password",
                "is_manager"
            ]
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// // TODO: Create POST to create new user 
// router.post('/', (req, res) => {
//     // create a new user
//     User.create({
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email,
//         password: req.body.email
//     })
//         .then(userData => res.json(userData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// TODO Create DELETE to remove user
router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    User.destroy( {
  
      where:{
        id: req.params.id
      }
    })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  });

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
            res.redirect('/');
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;