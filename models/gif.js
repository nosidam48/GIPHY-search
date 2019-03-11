var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Gif = new Schema({
  urlStill: {
    type: String
  },
  urlAnimate: {
      type: String
  },
  title: {
    type: String
  },
  rating: {
    type: String
  }
},{
    collection: 'mygifs'
});

module.exports = mongoose.model('Gif', Gif);