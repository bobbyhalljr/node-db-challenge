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

router.get('/:id', (req, res) => {
    Projects.getProjectById(req.params.id)
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

router.get('/:id/tasks', (req, res) => {
    Projects.getTasks(req.params.id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: "error getting tasks", err
        })
    })
})

router.post('/:id/tasks', (req, res) => {
    Projects.addTask(req.body)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: "error adding task", err
        })
    })
})

module.exports = router;