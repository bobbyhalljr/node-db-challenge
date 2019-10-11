const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: "error getting projects", err
        })
    })
})

router.post('/', (req, res) => {
    Projects.addProject(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: "error adding project", err
        })
    })
})


module.exports = router;