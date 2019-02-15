
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        {
         priority_id: 1,
         priority: 'low',
         rank:1
        },
        {
         priority_id: 2,
         priority: 'medium',
         rank:2
        },
        {
         priority_id: 3,
         priority: 'high',
         rank:3
        },
      ]);
    });
};
