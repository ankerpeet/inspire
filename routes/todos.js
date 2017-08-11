//REQUIRE EXPRESS AND MONGOOSE
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//TODO SCHEMA
var todoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    complete: {type: Boolean, required: true, default: false}
})
var Todos = mongoose.model('Todos', todoSchema);

//GET ALL TODOS FROM MONGODB
router.get('/', function(req, res, next) {
    Todos.find({})
    .then((todos)=>{
      res.send(todos)
    })
    .catch(next)
})

//POST NEW TODO TO MONGODB
router.post('/', function(req, res, next) {
    Todos.create(req.body)
    .then((todo)=>{
        res.send(todo)
    })
    .catch(next)
})

//DELETE TODO
router.delete('/:todoId', (req, res, next) => {
  var todoId = req.params.todoId
  Todos.findByIdAndRemove(todoId)
  .then(todo =>{
    res.send({message: 'Successfully deleted.'})
  })
  .catch(next)
})

//UPDATE TODO
router.put('/:todoId', (req, res, next) =>{
  var todoId = req.params.todoId
  var updatedTodoObj = req.body
  Todos.findByIdAndUpdate(todoId, updatedTodoObj)
  .then(todo => {
    res.send({message: 'Successfully Updated Todo'})
  })
  .catch(next)
})


//ERROR HANDLER
router.use(defaultErrorHandler)

function defaultErrorHandler(err, req, res, next){
  if (req.xhr){
    res.json({success: false, error: err})
  }else{
    res.json({success: false, error: err.message})
  }
}

module.exports = router