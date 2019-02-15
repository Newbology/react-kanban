
exports.up = function(knex, Promise) {
 return knex.schema.table('tasks', (table) => {
  table.integer('priority_id').references('priority_id').inTable('priorities').notNullable();
  table.integer('status_id').references('status_id').inTable('statuses').notNullable();
  table.integer('createdby_id').references('user_id').inTable('users').notNullable();
  table.integer('assignedTo_id').references('user_id').inTable('users');
 }) 
};

exports.down = function(knex, Promise) {
  
};
