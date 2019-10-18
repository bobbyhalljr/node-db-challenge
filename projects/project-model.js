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
    .where({ task_id: id })
    // .select(
    //     'projects.name as project', 
    //     'projects.description as Project Description', 
    //     'tasks.name as Task', 
    //     'tasks.description as Task description', 
    //     'tasks.notes as Tasks Notes', 
    //     'projects.completed as Projects Completed', 
    //     'tasks.completed as Tasks Completed'
    // )
}

function addTask(task, id){
    return db('projects')
    .join('tasks', 'projects.id', '=', 'project.task_id')
    .where({ task_id: id })
    .insert(task, 'id')
    .then(([ id ]) => {
        return getProjectById(id)
    })
}

