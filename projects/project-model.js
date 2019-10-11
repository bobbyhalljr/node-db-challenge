const db = require('../data/db-config');

module.exports = {
    getResources,
    addResource,
    getProjects,
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

function addProject(project){
    return db('projects')
    .insert(project, 'id')
}

function getTasks(id){
    return db('projects')
    .join('tasks', 'projects.tasks.id', '=', 'tasks.tasks_id')
    .where({ id: tasks_id })
    .select('projects.name', 'projects.description', 'tasks.name', 'tasks.description', 'tasks.notes', 'projects.completed', 'tasks.completed')
}

function addTask(task){
    return db('tasks')
    insert(task, 'id')
}

