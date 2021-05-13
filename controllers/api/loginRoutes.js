const router = require('express').Router();
const { User } = require('../../models');


router.post('/', async (req, res) => {
    try {
        const userData = await Users.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err)
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await Users.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(400).json({ message: "Don't panic. But one of those was wrong. Please try again"});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: "Don't panic. But one of those was wrong. Please try again"});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: "Welcome! Please make sure you have your towel."});
        });
    } catch (err) {
        res.status(400).json(err);
    }
})

  

module.exports = router;