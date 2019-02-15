const bookshelf = require('./bookshelf');

class User extends bookshelf.Model{
  get tableName() {return 'users';}
  get hasTimestamps() {return true;}

  assignedTo(){
   return this.belongsTo('Task');
  };

  createdBy(){
   return this.belongsTo('Task');
  };
};

module.exports = bookself.model('User', User); 