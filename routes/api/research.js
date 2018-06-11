var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Research = require('../models/Research.js');
const apiRoutes = require("./api");


routes.get('/', function (req, res, next) {
    researcher.find(function (err, id) {
        if (err) return next(err);
        res.json(id);
    });
});

routes.post('/', function (req, res, next) {
    researcher.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = routes;