
const router = require('express').Router();
const User = require('../db').import('../models/user.js');
//create a new endpoint : /create
//the endpoint is going to be a post request
//have an object that matches the model of UserTable (email/password)
//let sequelize create a new record in the database (create)
//USER SIGNUP
router.post('/create', function (req, res) {

//Oject
    User.create({
        // email: 'user@email.com', (hardcoded emaill)
        // password: 'password1234' (hardcoded password)
        email: req.body.user.email, //dynamic email
        password: req.body.user.password //dynamic password
    })
        .then(
            function createSuccess(user) {
                res.json ({
                    user: user
                });
            }
            // res.send('This is our user/create endpoint!')
        )
});

module.exports = router;