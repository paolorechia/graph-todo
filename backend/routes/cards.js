var express = require('express');
var router = express.Router();

/* Cards router */


/* GET methods */

// Get universe
router.get('/', function(req, res, next) {
  res.send('respond with card universe');
});

// Get card by SHID
router.get('/:shid', function(req, res, next) {
  res.send(req.params);
});

// Get subtree by SHID
router.get('/tree/:shid', function(req, res, next) {
  res.send(req.params);
});

// Get leafs by SHID
router.get('/leafs/:shid', function(req, res, next) {
  res.send(req.params);
});

// Propagate leaf tags by SHID
router.get('/propagate/:shid', function(req, res, next) {
  res.send(req.params);
});

// Find card by name
router.get('/search/:name', function(req, res, next) {
  res.send(req.params);
});


/* POST methods */
// Create card
router.post('/', function(req, res, next) {
  res.send('create card');
});


/* PUT methods */

// Rename card
router.put('/:shid/rename/:new_name', function(req, res, next) {
  res.send(req.params);
});


/* PATCH methods */
// Assign tag to card
router.patch('/assign/:tag_shid', function(req, res, next) {
  res.send(req.params)

});

/* DELETE methods */
// Delete card
router.delete('/:shid', function(req, res, next) {
  res.send(req.params);
});

module.exports = router;
