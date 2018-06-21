var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(new Date(Date.now()).toString() + " : about");
    res.render('about',{});
});

module.exports = router;
