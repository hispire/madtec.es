var mongoose = require('mongoose');

var Schema = mongoose.Schema;

function validator (val) {
  if(val === undefined || val.length < 2) {
    return false;
  } else {
    return true;
  }
}

// with a custom error message

var nameMsg = [validator, 'Por favor escibre tu nombre.']
var emailMsg = [validator, 'Por favor escibre tu email.']
var descriptionMsg = [validator, 'Por favor describe tu proyecto.']

var Project = new Schema ({
  name: {
    type: String,
    validate: nameMsg
  },
  email: {
    type: String,
    validate: emailMsg,
    lowercase: true
  },
  company: {
    type: String
  },
  description: {
    type: String,
    validate: descriptionMsg
  },
  images: [Images]
});

var Images = new Schema ({
  filename: {
    type: String
  },
  path: {
    type: String
  }
});

var ProjectModel = mongoose.model('Project', Project);

module.exports.ProjectModel = ProjectModel;
