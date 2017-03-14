var express = require('express');
var todoRouter = express.Router();
var Todo = require('../models/todo.models');

//GET /todos
todoRouter.get('/todos', function(req, res){
  Todo.find({}, function(err, documents){
    if(err){
      res.status(500).json({
     msg: err
      });
     } else {
        res.status(200).json({
       todo: documents
       });
     }
  });
});
//GET/Todos/:id
todoRouter.get('/todos/:id', function(req, res){
  Todo.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      })
    } else {
      res.status(200).json({
        todo: documents
      });
    }
  });
});
//POST /todos
todoRouter.post('/todos', function(req, res){
  var todo = new Todo(req.body);
  todo.save(function(err, document){
  if(err){
    res.status(500).json({
      msg: err
    });
    } else{
    res.status(201).json({
      msg: 'Success'
     });
   }
  })
})
//PUT /todos/:id
todoRouter.put('/todos/:id', function(req, res){
  Todo.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      })
    } else {
      res.status(200).json ({
        msg: 'Successfully Updated'
      });
    }
  });
});
//DELETE /todos/:id
todoRouter.delete('/todos/:id', function(req, res){
  Todo.remove({_id: req.params.id}, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      })
    } else {
      res.status(200).json({
        msg: 'Successfully Delete'
      });
    }
  });
});
module.exports = todoRouter;