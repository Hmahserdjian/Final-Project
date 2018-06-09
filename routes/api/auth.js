var mongoose = require('mongoose');
var passport = require('passport');
require('../config/passport')(passport);
var express = require('express');
var router = express.Router();
var User = require("../models/UserLogin");

app.get('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/login');
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            return res.redirect('/users/' + user.username);
        });
    })(req, res, next);
});

model.exports = auth;