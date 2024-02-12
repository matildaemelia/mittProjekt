var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var BilModel = require('../models/BilModel.js');


//req och res här är request- respektive response-objekten
router.get('/', function(req, res, next) {

  //find är Mongoose funktion.
  BilModel.find().then(function(bilarna) {
  
  //Om det inte uppstår fel så skicka bilarna i jsonformat
  res.json(bilarna);
  });
});

router.post('/', function(req, res, next) {
  //req.body är innehållet i requestobjektet, dvs en json med en bil
  BilModel.create(req.body).then(function(post) {
      res.json(post); //Här skickar vi tillbaka datan vi skickar in i databasen, om skrivningen gick bra
  }); 
});

router.delete('/:id', function(req, res, next) {
  BilModel.findByIdAndDelete(req.params.id, req.body).then(function(post) {
  res.json(post);
  });
});

module.exports = router;  