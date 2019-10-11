const db = require('../data/db-config');

module.exports = {
    getResources,
    addResources,
    getProjects,
    addProjects,
    getTasks,
    addTasks
}

function getResources(){
    return db('resources')
}

function addResources(resource){
    return db('resources')
    .insert(resource, 'id')
}

function getProjects(){
    return db('projects')
}

function addProjects(project){
    return db('projects')
    .insert(project, 'id')
}

function getTasks(id){
    return db('projects')
    .join('tasks', 'projects.tasks.id', '=', 'tasks.tasks_id')
    .where({ id: tasks_id })
    .select('projects.name', 'projects.description', 'tasks.name', 'tasks.description', 'tasks.notes', 'projects.completed', 'tasks.completed')
}

function addTasks(task){
    return db('tasks')
    insert(task, 'id')
}

