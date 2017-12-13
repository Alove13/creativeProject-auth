var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/coupleSignUp', function(req, res, next) {
  res.sendFile('couple.html', { root: 'public' });
});

router.get('/locationSignUp', function(req, res, next) {
  res.sendFile('location.html', { root: 'public' });
});

router.get('/viewLocations', function(req, res, next) {
  res.sendFile('viewLocations.html', { root: 'public' });
});

router.get('/editLocations', function(req, res, next) {
  res.sendFile('editLocations.html', { root: 'public' });
});

//---------------------------------------------------



module.exports = router;
