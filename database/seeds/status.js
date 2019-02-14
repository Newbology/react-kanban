
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses').insert([
        {
          status_id: 1,
          status: 'Inqueue',
          rank:1
        },
        {
          status_id: 2,
          status: 'Inprogress',
          rank:2
        },
        {
          status_id: 3,
          status: 'Complete',
          rank:3
        },
      ]);
    });
};
