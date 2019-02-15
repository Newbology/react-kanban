
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
         task_id: 1,
         title: 'GitGud',
         body:'practice git',
         priority_id:1,
         status_id:3,
         createdby_id:1,
         assignedTo_id:1
        },
        {
         task_id: 2,
         title: 'Prayer',
         body:'raise prayer to 99',
         priority_id:2,
         status_id:1,
         createdby_id:1,
         assignedTo_id:3
        },
        {
         task_id: 3,
         title: 'Strength',
         body:'Raise prayer to 99',
         priority_id:1,
         status_id:2,
         createdby_id:1,
         assignedTo_id:2
        },
        {
         task_id: 4,
         title: 'Runecrafting',
         body:'Raise Runecrafting to 99',
         priority_id:1,
         status_id:1,
         createdby_id: 1,
         assignedTo_id:2
        },
      ]);
    });
};
