const express = require('express');

// const projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: "error getting recipes"
        })
    })
})

module.exports = router;