exports.up = function(knex, Promise) {
  return knex.schema.table('tasks', table => {
    table.renameColumn('task_id', 'id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks');
};
