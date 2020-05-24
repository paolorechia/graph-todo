var express = require('express');
var router = express.Router();

/* GET auth resource . */
router.get('/', function(req, res, next) {
  res.send('respond with auth resource\n');
});

module.exports = router;
