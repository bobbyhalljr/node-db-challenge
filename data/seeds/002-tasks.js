
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { 
          description: 'plan project', 
          notes: 'this is a note', 
          completed: false, 
          project_id: 1 
        },
        
        { 
          description: 'get project up and running', 
          notes: 'this is a note', 
          completed: false, 
          project_id: 2 
        },
        
        { 
          description: 'test project', 
          notes: 'this is a note', 
          completed: false, 
          project_id: 3 
        }
      ]);
    });
};
