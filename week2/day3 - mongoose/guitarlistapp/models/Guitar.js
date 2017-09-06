var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.createConnection('mongodb://localhost/guitarlistapp', {
  useMongoClient: true,
});

// create a schema
var guitarSchema = new Schema({
  name: String,
  created_at: {type: Date, default: Date.now },
  updated_at: Date
});

// the schema is useless so far, we need to create a model using it
var Guitar = mongoose.model('Guitar', guitarSchema);

// make this available to our users in our Node applications
module.exports = Guitar;
