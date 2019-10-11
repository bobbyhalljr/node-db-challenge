
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'bobby project 1', description: 'A good olde project', completed: false},
        {name: 'bobby project 2', description: 'A good olde project # 2', completed: false},
        {name: 'bobby project 3', description: 'A good olde project # 3', completed: false}
      ]);
    });
};
