const bookshelf = require('./bookshelf');

class Status extends bookshelf.Model{
  get tableName() {return 'statuses';}
  get hasTimestamps() {return true;}

  status(){
   return this.belongsTo('Task');
  };
};

module.exports = bookshel.model('Status', Status);