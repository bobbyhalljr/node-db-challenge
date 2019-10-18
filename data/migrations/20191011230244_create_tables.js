
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable()
        tbl.string('description', 255)
        tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(false) 
    })
    .createTable('tasks', tbl => {
        tbl.increments();

        tbl.string('description', 255).notNullable()
        tbl.string('notes', 255)
        tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(false) 

        tbl
        .integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
        .unique('task_id')
        
    })
    .createTable('resources', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable()
        tbl.string('description', 255)
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
};
