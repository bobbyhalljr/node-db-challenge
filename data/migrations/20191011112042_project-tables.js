
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable()
        tbl.string('description', 255)
        tbl.boolean('completed')   
    })
    .createTable('tasks', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable()
        tbl.string('description', 255).notNullable()
        tbl.string('notes', 255)
        tbl.boolean('completed')
        tbl
        .integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        // .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .unique()
    })
    .createTable('resources', tbl => {
        tbl.increments();

        tbl.string('name', 255)
        tbl.string('description', 255)
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
};
