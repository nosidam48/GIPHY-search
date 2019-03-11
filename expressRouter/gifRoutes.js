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
   Gif.find(function (err, coins){
    if(err){
      console.log(err);
    }
    else {
      res.json(coins);
    }
  });
});

// Defined edit route
gifRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Gif.findById(id, function (err, gif){
      res.json(gif);
  });
});

//  Defined update route
gifRoutes.route('/update/:id').post(function (req, res) {
   Gif.findById(req.params.id, function(err, gif) {
    if (!gif)
      return next(new Error('Could not load Document'));
    else {
      gif.url = req.body.url;
      gif.title = req.body.title;
      gif.rating = req.body.rating;

      gif.save().then(gif => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
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