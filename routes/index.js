var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(new Date(Date.now()).toString() + " : index");
    //res.render('index', { title: 'Express' });
  res.redirect('/about');
});

module.exports = router;
