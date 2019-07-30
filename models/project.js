const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    required: true,
    type: String
  },
  img: {
    required: true,
    type: String
  },
  links: {
    required: true,
    type: [String]
  },
  techologies: {
    required: true,
    type: [String]
  },
  overview: {
    required: true,
    type: String
  },
  difficulties: {
    type: String
  },
  solutions: {
    type: String
  },
  features: {
    required: true,
    type: [String]
  }
});

const Project = mongoose.model("Projects", projectSchema);

exports.Project = Project;
