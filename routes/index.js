var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Madtec' });
});

router.get('/services', function(req, res) {
  res.render('services', { title: 'Madtec' });
});

router.get('/start-project', function(req, res) {
  res.render('start-project');
});

module.exports = router;
