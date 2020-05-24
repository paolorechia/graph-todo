import * as express from 'express';
const router = express.Router();

import cardModel from './models/card';

/* Cards router */

/* GET methods */

/**
 * Gets the universe of cards for a user
 * @route GET /cards
 * @group Cards - Operations about cards
 * @returns {Array<Card>} 200 - An array of cards
 * @returns {Error}  default - Unexpected error
 */
router.get('/', function(req, res, next) {
  res.send('respond with card universe');
});

/**
 * Gets a card by it's SHID
 * @route GET /cards/:shid
 * @group Cards - Operations about cards
 * @param {string} shid.query.required - card shid
 * @returns {Card.model} 200 - A card
 * @returns {Error}  default - Unexpected error
 */
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

export default router;
