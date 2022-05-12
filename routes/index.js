var express = require('express');
var router = express.Router();

const { getHomepageRoute, getSigninRoute, getReviewRoute, getSignupRoute, getEditprofileRoute, getProfileRoute } = require('../controllers/index');

/* GET home page route. */
router.get('/', getHomepageRoute);

/* GET /signin page route. */
router.get('/signin', getSigninRoute);

/* GET /signup page route. */
router.get('/signup', getSignupRoute);

/* GET /review page route. */
router.get('/review',  getReviewRoute);

/* GET /editprofile page route. */
router.get('/editprofile',  getEditprofileRoute);

/* GET /profile page route. */
router.get('/profile', getProfileRoute);

module.exports = router;
