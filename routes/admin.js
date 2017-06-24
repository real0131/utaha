var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin',{});
});

router.post('/auth', function (req,res,next) {
    console.log(req.body);
    res.end('hello');
});

module.exports = router;