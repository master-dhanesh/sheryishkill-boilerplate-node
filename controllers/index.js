var express = require('express');
var router = express.Router();


/* GET home page controller. */
exports.getHomepageRoute = (req, res, next) => res.render('index');

/* GET /signin page controller. */
exports.getSigninRoute = (req, res, next) => res.render('sections/signin');

/* GET /signup page controller. */
exports.getSignupRoute = (req, res, next) => res.render('sections/signup');

/* GET /editprofile page controller. */
exports.getEditprofileRoute = (req, res, next) => res.render('sections/editprofile');

/* GET /profile page controller. */
exports.getProfileRoute = (req, res, next) => res.render('sections/profile');

/* GET /review page controller. */
exports.getReviewRoute = (req, res, next) => res.render('section/review');