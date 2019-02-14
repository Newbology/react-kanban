exports.up = function(knex, Promise) {
  return knex.schema.createTable('priorities', (table) => {
    table.increments('priority_id').primary();
    table.string('priority').notNullable();
    table.integer('rank').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('priorities');
};
 