
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
         id: 1,
         title: 'GitGud',
         body:'practice git',
         priority_id:1,
         status_id:3,
         createdBy_id:1,
         assignedTo_id:1
        },
        {
         id: 2,
         title: 'Prayer',
         body:'raise prayer to 99',
         priority_id:2,
         status_id:1,
         createdBy_id:1,
         assignedTo_id:3
        },
        {
         id: 3,
         title: 'Strength',
         body:'Raise prayer to 99',
         priority_id:1,
         status_id:2,
         createdBy_id:1,
         assignedTo_id:2
        },
        {
         id: 4,
         title: 'Runecrafting',
         body:'Raise Runecrafting to 99',
         priority_id:1,
         status_id:1,
         createdBy_id: 1,
         assignedTo_id:2
        },
      ]);
    });
};
