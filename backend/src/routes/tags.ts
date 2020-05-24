import * as express from 'express';

const router = express.Router();
import { Database } from './database/connector';

class TagRouter {
  db: Database;
  router: express.Router
  constructor(db: Database) {
    this.db = db; 
    /* Cards router */
    this.router = express.Router();

  }
  initRouter = (): express.Router => {
    this.router.get('/', (req, res, next) => {
      res.send('List tags');
    });

    this.router.get('/:tag_shid', (req, res, next) => {
      res.send('Get specific tag');
    });

    this.router.put('/rename/:tag_shid', (req, res, next) => {
      res.send('Rename tag');
    });

    this.router.post('/conflict/:tag1_shid/:tag2:shid', (req, res, next) => {
      res.send('Creates conflict between two tags');
    });

    this.router.delete('/conflict/:tag1_shid/:tag2:shid', (req, res, next) => {
      res.send('Delete conflict between two tags');
    });

    this.router.delete('/:tag_shid', (req, res, next) => {
      res.send('Delete specific tag');
    });
    return this.router;
  }
}

module.exports = (db: any) => { 
  const tagRouter = new TagRouter(db);
  return tagRouter.initRouter();
}
