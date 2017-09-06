var express = require('express');
var router = express.Router();
var Guitar = require('../models/Guitar');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended: true}))

/* GET home page. */
  router.get('/', function(req, res, next) {
    Guitar.find()
      res.render('index', {
        title: "Bren's Guitars (that I know of)"});
        console.log('Home Page');

    });


router.post('/', (req, res) => {
  console.log(req.body.newguitar)
  var newname = req.body.newguitar;
  let guitar = new Guitar();
  guitar.name = newname;
  guitar.save()
  .then(() => {
      console.log('Guitar saved successfully!');
    res.redirect('/')
  })
});


module.exports = router;

router.listen(3000, function() {
  console.log('listening on 3000')
})
