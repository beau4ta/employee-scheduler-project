const router = require('express').Router();
const { Work } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async(req, res) => {
    try {
        const newWork = await Work.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newWork);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put()


router.delete('/:id', withAuth, async(req, res) => {
    try {
        const workData = await Work.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!workData) {
            res.status(404).json({ message: 'No work found with this id!' });
            return;
        }

        res.status(200).json(workData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;