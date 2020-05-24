import * as express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('list users\n');
});

router.post('/', function(req, res, next) {
  res.send('create new user\n');
});

router.put('/', function(req, res, next) {
  res.send('modify user attributes\n');
});

router.patch('/api_key', function(req, res, next) {
  res.send('generate new api key for user\n');
});

router.get('/:id', function(req, res, next) {
  res.send('respond with specific user\n');
});

router.delete('/:id', function(req, res, next) {
  res.send('delete user\n');
});

router.delete('/api_key/<key_end>', function(req, res, next) {
  res.send('delete api key ending with substring for user\n');
});

router.delete('/api_key', function(req, res, next) {
  res.send('delete all api keys for user\n');
});

export default router;
