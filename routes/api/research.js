var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var researchController = require('../../Controller/Research.js');
var apiRoutes = require("./api");

router
    .route("/")
    .get(researchController.findAll);

router
    .route("/Profile")
    .get(researchController.findAll);
    
router
    .route("/Signin")
    .get(researchController.findAll);
// router.get('/', function (req, res, next) {
//     researcher.find(function (err, id) {
//         if (err) return next(err);
//         res.json(id);
//     });
// });

// router.post('/', function (req, res, next) {
//     researcher.create(req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

// router.get('/Profile', function (req, res, next) {
//     researcher.find(function (err, id) {
//         if (err) return next(err);
//         res.json(id);
//     });
// });

// router.post('/Profile', function (req, res, next) {
//     researcher.create(req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });


module.exports = routes;