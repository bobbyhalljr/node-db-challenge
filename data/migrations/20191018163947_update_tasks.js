
exports.up = function(knex, promise) {
    return knex.schema.table('tasks', (tbl) => {
        
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
        .unique('tasks_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
};
