exports.up = function(knex, Promise) {
  return knex.schema.table('tasks', table => {
    table.renameColumn('createdby_id', 'createdBy_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks');
};
