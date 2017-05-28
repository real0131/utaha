var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('works',{});
});

router.get('/data/:id',function (req,res,next) {
    //req.params.id
    console.log(req.params.id);
    console.log(req.query.withnav);
    res.status(200).send(req.params.id+req.query.withnav);
});

module.exports = router;
