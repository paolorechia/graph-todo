import * as express from 'express';
const router = express.Router();

import { Database } from './database/connector';

class AuthRouter {
  db: Database;
  router: express.Router
  constructor(db: Database) {
    this.db = db; 
    /* Cards router */
    this.router = express.Router();
  }

  initRouter = (): express.Router  => {
    /* GET auth resource . */
    this.router.get('/api', (req, res, next) => {
      res.send('Auth resource for API key authentication\n');
    });

    this.router.post('/login', (req, res, next) => {
      res.send('TODO after MVP, login with user/password\n');
    });
    return this.router;
  }
}

module.exports = (db: any) => { 
  const authRouter = new AuthRouter(db);
  return authRouter.initRouter();
}
