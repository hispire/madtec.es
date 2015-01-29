var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Project = new Schema ({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  description: {
    type: String,
    required: true
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
