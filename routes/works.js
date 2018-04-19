var express = require('express');
var router = express.Router();
var model = require('../models/');
var post = model.Post;
/* GET home page. */
router.get('/', function(req, res, next) {
    var data = [];
    post.findAll().then((results) => { res.render('works',{data : results}); });
});

router.get('/data/:id',function (req,res,next) {
    //req.params.id
    console.log(req.params.id);
    console.log(req.query.withnav);
    res.status(200).send(req.params.id+req.query.withnav);
});

router.get('/content/:id',function(req,res){
    console.log('flag 1');
        console.log('flag 2');
        post.findOne({where: {id: req.params.id}})
            .then((results) => {
                console.log(results.content);
                res.end(results.content);
            });
});
module.exports = router;
