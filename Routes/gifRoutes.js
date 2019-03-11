var express = require('express');
var app = express();
var gifRoutes = express.Router();

// Require Item model in our routes module
var Gif = require('../models/gif');

// Defined store route
gifRoutes.route('/add').post(function (req, res) {
  var gif = new Gif(req.body);
   gif.save()
    .then(item => {
    res.status(200).json({'gif': 'Gif added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
gifRoutes.route('/mygifs').get(function (req, res) {
   Gif.find(function (err, gifs){
    if(err){
      console.log(err);
    }
    else {
      console.log(gifs);
      
      res.json(gifs);
    }
  });
});


// Defined delete | remove | destroy route
gifRoutes.route('/delete/:id').get(function (req, res) {
   Gif.findByIdAndRemove({_id: req.params.id}, function(err, gif){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = gifRoutes;