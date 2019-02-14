const bookshelf = require('./bookshelf');

class Priority extends bookshelf.Module{
  get tableName() {return 'priorities';}
  get hasTimestamps() {return true;}

  priority(){
   return this.belondsTo('Card');
  };
};

module.exports = bookshelf.Model('Priority', Priority);