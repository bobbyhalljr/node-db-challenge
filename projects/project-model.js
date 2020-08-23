const db = require('../data/db-config');

module.exports = {
    getResources,
    addResource,
    getProjects,
    getProjectById,
    addProject,
    getTasks,
    addTask
}

function getResources(){
    return db('resources')
}

function addResource(resource){
    return db('resources')
    .insert(resource, 'id')
}

function getProjects(){
    return db('projects')
}

function getProjectById(id){
    return db('projects')
    .where({ id })
    .first()
}

function addProject(project){
    return db('projects')
    .insert(project, 'id')
}

function getTasks(id){
    return db('projects')
    .join('tasks', 'projects.id', '=', 'tasks.project_id')
    .where({ project_id: id })
}

function addTask(task){
    return db('tasks')
    .insert(task)
    .then(([ id ]) => {
        return getProjectById(id)
    })
}

