const express = require('express');
const router = express.Router();
const Card = require('../../database/models/Card');

function isAuthenticated (req, res, next) {
  if(req.isAuthenticated()) { next();}
  else { res.redirect('/'); }
};

router.get('/', (req,res) => {
  console.log('asjndlasjnsa')
  Card
  .fetchAll()
  .then((cards)=>{
    console.log(cards);
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
  .then(() => {
    res.redirect('/');
  });
});

router.put('/', (req,res) => {
  let id = req.params.id
  Card
  .forge(body)
  .where('id', id)
  .save(null, {method: 'update'})
  res.redirect('/')
});

router.delete('/', (req,res) =>{
  let id = req.params.id;
  Card
  .where('id', id)
  .destroy()
  .then(() => {
    res.redirect('/')
  })
});

module.exports = router;