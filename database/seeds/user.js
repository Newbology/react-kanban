
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          user_id: 1,
          first_name: 'jimmy',
          last_name:'bob',
          username:'username',
          password:'password',
          email:'jimmybob_135@hotmail.com'
        },
        {
          user_id: 2,
          first_name: 'jo',
          last_name:'lama',
          username:'username',
          password:'password',
          email:'jolama@hotmail.com'
        },
        {
          user_id: 3,
          first_name: 'joebob',
          username:'username',
          password:'password',
          last_name:'sherwood',
          email:'joebobsherwood@hotmail.com'
        },
      ]);
    });
};
