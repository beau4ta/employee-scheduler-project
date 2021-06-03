const router = require('express').Router();
const { try } = require('bluebird');
const { calendar } = require('../../models')
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async(req, res) => {
    try {
        const newCalendar = await calendar.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newCalendar)
    } catch (err) {
        res.status(400).json(err);
    }
})
router.delete('/:id', withAuth, async(req, res) => {
    try {
        const calendarData = await calendar.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!calendarData) {
            res.status(404).json({ message: 'Calendar not found with this id!' });
            return;
        }

        res.status(200).json(calendarData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;

