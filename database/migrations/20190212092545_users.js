exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id').primary();
    table.string('first_name').notNullable().unique();
    table.string('last_name').notNullable();
    table.string('username').notNullable()
    table.string('password').notNullable();
    table.string('email').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
 