const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getResources()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: "error getting resources", err
        })
    })
})

router.post('/', (req, res) => {
    Projects.addResource(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: "error adding resource", err
        })
    })
})

module.exports = router;