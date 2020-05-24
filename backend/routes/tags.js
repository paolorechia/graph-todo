var express = require('express');
var router = express.Router();

/* GET tags . */
router.get('/', function(req, res, next) {
  res.send('respond with tag resource');
});

module.exports = router;
