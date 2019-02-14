const express = require('express');
const router = express.Router();
const Card = require('../../database/models/Card');
const { isAuthenticated } = require('../auth/index')


router.get('/', (req,res) => {
  Card
  .fetchAll()
  .then((cards)=>{
    res.json(cards);
  })
});

router.post('/',isAuthenticated, (req,res) => {
  Card
  .forge({
    title: req.body.title,
    body: req.body.body,
    status_id: req.status.id,
    priority_id: req.priority.id,
    createdBy_id: req.user.id,
    assignedTo_id: req.user.id
  })
  .save(null, { method: 'insert' })
  .then((card) => {
    res.json(card);
  });
});

router.put('/', (req,res) => {
  let id = req.params.id
  Card
  .forge(body)
  .where('id', id)
  .save(null, {method: 'update'})
  .then((card) => {
    res.json(card)
  })
});

router.delete('/', (req,res) =>{
  let id = req.params.id;
  Card
  .where('id', id)
  .destroy()
  .then((card) => {
    res.json(card)
  })
});

module.exports = router;