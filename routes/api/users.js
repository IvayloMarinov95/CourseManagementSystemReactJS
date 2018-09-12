const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');

//User Model
const User = require('../../models/User');

// @route GET api/items
//@desc get All User
//@access Public
router.get('/', (req, res) => {
    User.find()
    .sort({date: -1})
    .then(users => res.json(users))
});

// @route POST api/items
//@desc Create an User
//@access Public
router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save().then(user => res.json(user));
});

router.post("/login", (req, res, next) => {
   User.find({ email: req.body.email })
    .exec()
    .then(user => {
        if(user.length < 1) {
            return res.status(401).json({
                message: 'Auth failed'
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            } 
            if(result){
                const token = jwt.sign({
                    email: user[0].email,
                    userId: user[0]._id
                }, "secret", {
                    expiresIn: "1h"
                },
            )
                return res.status(200).json({
                    message: 'Auth successful',
                    token: token
                });
            }
            res.status(401).json({
                message: 'Auth failed'
            })
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        id: req.user._id,
        name: req.user.name,
        email: req.user.email
    });
});


// @route DELETE api/items/:id
//@desc Delete an User
//@access Public
router.delete('/:id', (req, res) => {
   User.findById(req.params.id)
   .then(user => user.remove().then(() => res.json({success: true})))
   .catch(err => res.status(404).json({success: false}));
});


module.exports = router;