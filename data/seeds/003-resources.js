
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'design school', description: 'The best resource for designing a project'},
        {name: 'how to plan a project', description: 'The best resource for planning a project'},
        {name: 'how to test a project', description: 'The best resource for testing a project'}
      ]);
    });
};
