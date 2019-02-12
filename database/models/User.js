const bookshelf = require('./bookshelf');

class User extends bookshelf.Model{
  get tableName() {return 'users';}
  get hasTimestamps() {return true;}

  assignedTo(){
   return this.belongsTo('Card');
  };

  createdBy(){
   return this.belongsTo('Card');
  };
};

module.exports = bookself.model('User', User); 