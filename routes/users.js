var express = require('express');
var router = express.Router();
const PlantaService= require('../services/PlantaService')
const service = new PlantaService();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
