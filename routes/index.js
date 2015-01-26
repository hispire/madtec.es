var express = require('express');
var router = express.Router();
var email = require('.././config/email.js')

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

router.post('/start-project', function(req, res) {
  console.log(req.files);
  var files = [].concat(req.files.file);
  if(files[0] != undefined) {
    var attachFiles = [];
    for(var i=0;i<files.length;i++) {
      var file = {
        filename: files[i].originalname ,
        path: files[i].path
      }
      attachFiles.push(file);
      console.log(attachFiles);
    }
  }
  email.transport.sendMail(email.mailOptions(req.body.name, req.body.email, req.body.company, 
                                             req.body.project_type, req.body.budget, req.body.timeframe, 
                                             req.body.project_details, attachFiles), 
    function(err) {
    if(err) {
      res.status(500);
      res.send('Error sending email: ' + err);
    } else {
      res.send('Email sent!');
    }
  }) 
  //console.log(req.files);
});

module.exports = router;
