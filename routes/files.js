var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('files',{});
});

router.get('/:filename', function(req, res, next) {
    res.render('files',{});
    console.log(req.params.filename);
});

module.exports = router;