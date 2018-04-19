var express = require('express');
var config = require('config');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin',{});
});

router.post('/auth', function (req,res,next) {
    console.log(req.body);
    res.end('hello');

    if(id == "admin_account" && password == "helloworld"){
        res.render('admin',{});
    }
});

module.exports = router;