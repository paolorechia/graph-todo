var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('List tags');
});

router.get('/:tag_shid', function(req, res, next) {
  res.send('Get specific tag');
});

router.put('/rename/:tag_shid', function(req, res, next) {
  res.send('Rename tag');
});

router.post('/conflict/:tag1_shid/:tag2:shid', function(req, res, next) {
  res.send('Creates conflict between two tags');
});

router.delete('/conflict/:tag1_shid/:tag2:shid', function(req, res, next) {
  res.send('Delete conflict between two tags');
});

router.delete('/:tag_shid', function(req, res, next) {
  res.send('Delete specific tag');
});

module.exports = router;
