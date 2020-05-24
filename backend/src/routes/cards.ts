import * as express from 'express';

import cardModel from './models/card';
import { Database } from './database/connector';

class CardRouter {
  db: Database;
  router: express.Router
  constructor(db: Database) {
    this.db = db; 
    /* Cards router */
    this.router = express.Router();
  }

  initRouter = (): express.Router => {
    /* GET methods */
    /**
     * Gets the universe of cards for a user
     * @route GET /cards
     * @group Cards - Operations about cards
     * @returns {Array<Card>} 200 - An array of cards
     * @returns {Error}  default - Unexpected error
     */
    this.router.get('/', (req, res, next) => {
      res.send('Respond with card universe');
    });

    /**
     * Gets a card by it's SHID
     * @route GET /cards/:shid
     * @group Cards - Operations about cards
     * @param {string} shid.query.required - card shid
     * @returns {Card.model} 200 - A card
     * @returns {Error}  default - Unexpected error
     */
    this.router.get('/:shid', (req, res, next) => {
      res.send(req.params);
    });

    // Get subtree by SHID
    this.router.get('/tree/:shid', (req, res, next) => {
      res.send(req.params);
    });

    // Get leafs by SHID
    this.router.get('/leafs/:shid', (req, res, next) => {
      res.send(req.params);
    });

    // Propagate leaf tags by SHID
    this.router.get('/propagate/:shid', (req, res, next) => {
      res.send(req.params);
    });

    // Find card by name
    this.router.get('/search/:name', (req, res, next) => {
      res.send(req.params);
    });


    /* POST methods */
    // Create card
    this.router.post('/', (req, res, next) => {
      res.send('create card');
    });


    /* PUT methods */

    // Rename card
    this.router.put('/:shid/rename/:new_name', (req, res, next) => {
      res.send(req.params);
    });


    /* PATCH methods */
    // Assign tag to card
    this.router.patch('/assign/:tag_shid', (req, res, next) => {
      res.send(req.params)

    });

    /* DELETE methods */
    // Delete card
    this.router.delete('/:shid', (req, res, next) => {
      res.send(req.params);
    });
    return this.router;
  }

}

module.exports = (db: any) => { 
  const cardRouter = new CardRouter(db);
  return cardRouter.initRouter();
}
