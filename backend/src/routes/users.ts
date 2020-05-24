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
      res.send('list users\n');
    });

    this.router.post('/', (req, res, next) => {
      res.send('create new user\n');
    });

    this.router.put('/', (req, res, next) => {
      res.send('modify user attributes\n');
    });

    this.router.patch('/api_key', (req, res, next) => {
      res.send('generate new api key for user\n');
    });

    this.router.get('/:id', (req, res, next) => {
      res.send('respond with specific user\n');
    });

    this.router.delete('/:id', (req, res, next) => {
      res.send('delete user\n');
    });

    this.router.delete('/api_key/<key_end>', (req, res, next) => {
      res.send('delete api key ending with substring for user\n');
    });

    this.router.delete('/api_key', (req, res, next) => {
      res.send('delete all api keys for user\n');
    });
    return this.router;
  }
}

module.exports = (db: any) => { 
  const tagRouter = new TagRouter(db);
  return tagRouter.initRouter();
}
