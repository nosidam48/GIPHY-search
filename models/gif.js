var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Gif = new Schema({
  url: {
    type: String
  },
  title: {
    type: String
  },
  rating: {
    type: String
  }
},{
    collection: 'gifs'
});

module.exports = mongoose.model('Gif', Gif);