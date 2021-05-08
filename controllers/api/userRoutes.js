const router = require('express').Router();
const Users = require('../../models/users');


router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const userData = await Users.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err)
        res.status(400).json({message: "Don't panic. But one of those was wrong. Please try again", err})
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await Users.findOne({ where: { email: req.body.email } });
        if (!userData) {
            res.status(404).json({ message: "Don't panic. But one of those was wrong. Are you sure your have your towel? Please try again"});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        console.log(validPassword)
        if (!validPassword) {
            res.status(404).json({ message: "Don't panic. But one of those was wrong. Are you sure your have your towel? Please try again"});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: "Welcome! Please make sure your towel is handy at all times while visiting!"});
        });
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  
module.exports = router;