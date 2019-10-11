
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {name: 'Do the project # 1', description: 'plan project', notes: 'this is a note', completed: false, task_id: 1},
        {name: 'Do the project even better', description: 'get project up and running', notes: 'this is a note', completed: false, task_id: 2},
        {name: 'Do the project even better than that!', description: 'test project', notes: 'this is a note', completed: false, task_id: 3}
      ]);
    });
};
