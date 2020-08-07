var express = require('express');
var router = express.Router();

const workshopMock = require('../mocks/workshops.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(workshopMock)
});

module.exports = router;