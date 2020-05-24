var express = require('express');
var router = express.Router();

/* GET auth resource . */
router.get('/api', function(req, res, next) {
  res.send('Auth resource for API key authentication\n');
});

router.post('/login', function(req, res, next) {
  res.send('TODO after MVP, login with user/password\n');
});

module.exports = router;
