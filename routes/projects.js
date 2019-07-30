const express = require("express");
const router = express.Router();
const { Project } = require("../models/project");

router.get("/", async (req, res) => {
  try {
    const project = await Project.find().select({
      title: 1,
      img: 1,
      links: 1,
      techologies: 1
    });
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/", async (req, res) => {
  const project = await new Project({
    title: req.body.title,
    img: req.body.img,
    links: req.body.links,
    techologies: req.body.techologies,
    overview: req.body.overview,
    difficulties: req.body.difficulties,
    solutions: req.body.solutions,
    features: req.body.features
  });

  await project.save();

  res.json(project);
});

module.exports = router;
