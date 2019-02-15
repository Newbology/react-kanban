const bookshelf = require('./bookshelf');

class Task extends bookshelf.Model{
  get tableName() {return 'tasks';}
  get hasTimestamps() {return true;}

  status(){
    return this.hasMany('Status', 'status_id', 'status_id');
  };
  priority(){
    return this.hasMany('Priority', 'priority_id', 'priority_id');
  };
  createdBy(){
    return this.hasMany('User', 'user_id', 'createdBy_id');
  };
  assignedTo(){
    return this.hasMany('User', 'user_id', 'assingedTo_id');
  }
};

  module.exports = bookshelf.model('Task', Task);