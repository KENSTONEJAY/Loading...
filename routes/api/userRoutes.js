const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try {
        const validUsername = await User.findOne({where: {email: req.body.username}});
        console.log('user',validUsername);
        if (!validUsername) {
            res.status(400).json({ message: 'Password or Username is incorrect, please try again'});
            return;
        }
       
        const validPassword = await validUsername.checkPassword(req.body.password);
        console.log('req.body.password',validPassword);
        if (!validPassword) {
            res.status(400).json({ message: 'Password or Username is incorrect, please try again'});
            return;
        };
        
        req.session.user_id = validUsername.id;
        req.session.logged_in = true;
        req.session.username = validUsername.email
        
        console.log(req.session);
        res.json({ user: validUsername.email, message: `Welcome ${validUsername.email}`})
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(400).end
    }
});

router.post('/signup', (req, res) => {
    User.create(req.body)
    .then((newUser) => {
        res.send(newUser);
    })
    .catch ((err) => {
        res.json(err);
    })
}) 

module.exports = router;
