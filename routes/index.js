var express = require('express');
var router = express.Router();

// MODELS =============================
var project = require('.././models/project.js').ProjectModel;

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

function parseFiles(files) {
  var filesArray = [].concat(files);
  var parsedFiles = [];
  if(filesArray[0] != undefined) {
    for(var i=0;i<filesArray.length;i++) {
      var file = {
        filename: filesArray[i].originalname ,
        path: filesArray[i].path
      }
      parsedFiles.push(file);
    }
  } else {
    parsedFiles = []; 
  }
  return parsedFiles;
}

router.post('/start-project', function(req, res) {
  var projectFiles = parseFiles(req.files.file);
  
  project.create({name: req.body.name, email: req.body.email, company: req.body.company,
                  description: req.body.project_details, images: projectFiles}, 
  function(err, data) {
    if(err) {
      res.status(500);
      res.render('start-project', {valErrors: err});
    } else {
      res.send('Project Created!');
      // Flash error and success msg with ext library
      // Maybe send confirmation mail to the client and/or us
    }
  }); 
});

module.exports = router;
