const express = require('express');
const router = express.Router();
const Task = require('../../database/models/Task');


router.get('/', (req,res) => {
  return Task
  .fetchAll()
  .then((tasks)=>{
    res.json(tasks);
  }).catch(err => {
    res.json(err)
  });
}); 

router.post('/', (req,res) => {
  Task 
  .forge({
    title: req.body.title,
    body: req.body.body,
    status_id: req.body.status_id,
    priority_id: req.body.priority_id,
    createdBy_id: req.body.createdBy_id,
    assignedTo_id: req.body.assignedTo_id
  })
  .save(null, { method: 'insert' })
  .then((task) => {
    res.json(task);
  });
});

router.put('/', (req,res) => {
  let id = req.params.id;
  Task
  .forge(body)
  .where('id', id)
  .save(null, {method: 'update'})
  .then((task) => {
    res.json(task)
  });
});

router.delete('/', (req,res) =>{
  let id = req.params.id;
  Task
  .where('id', id)
  .destroy()
  .then((task) => {
    res.json(task)
  });
});

module.exports = router;