var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HH Auto-części' });
});

router.get('/about', function(req, res, next){
  res.render('about', { title: 'O nas'});
});

router.get('/contact', function(req, res, next){
  res.render('contact', { title: 'Kontakt'});
});

module.exports = router;
