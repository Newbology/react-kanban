
exports.up = function(knex, Promise) {
 return knex.schema.createTable('tasks', (table) => { 
  table.increments().primary();
  table.string('title', 255).notNullable();
  table.string('body', 1024).notNullable();
  table.timestamps(true, true)
 }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks');
};
