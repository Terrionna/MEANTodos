var mongoose = require('mongoose');


//Create the Mongoose Schema
var todoSchema = mongoose.Schema ({
  category: String,
  task: String,
  date: Number
});
//Create the Mongoose Model
var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
