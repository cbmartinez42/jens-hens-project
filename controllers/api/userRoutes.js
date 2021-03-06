const router = require('express').Router();
const User = require('../../models/User');


router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            admin: req.body.admin,
            request_admin: req.body.request_admin,
        });
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json({
            message: "Don't panic. But one of those was wrong. Please try again",
            err
        })
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!userData) {
            res.status(400).json({
                message: "This is not looking good...you'd better try again"
            });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: "This is not looking good...you'd better try again"
            });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({
                user: userData,
                message: "Welcome! You did it!"
            });
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

router.get('/:id', async (req, res) => {
    const id=req.params.id;
    try {
        const userData = await User.findOne({
            where: {
                id: `${id}`
            }
        });
        if (!userData) {
            res.status(400).json({
                message: "This is not looking good...you'd better try again"
            });
            return;
        }
    }
    catch (err) {
        res.status(400).json({
            message: "Don't panic. But one of those was wrong. Please try again",
            err
        })
    }
});

router.put('/:id', async (req, res) => { //withAuth, 

    try {
        const userData = await User.update({
            admin: req.body.admin,
            request_admin: req.body.request_admin
        }, {
            where: {
                id: req.params.id
            }
        });
        if (!userData) {
            res.status(404).json({
                message: 'No user with this ID. Please try again.'
            });
            return;
        }
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;