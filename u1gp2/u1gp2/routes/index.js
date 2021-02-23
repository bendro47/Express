var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
  {name: 'MongoDB Database Engine'},
  {name: 'Express Framework' },
  {name: 'Angular Client side' },
  {name: 'Node.js Server software' }
  ];
  var myname= "My Name: Ben";
  res.render('index', 
  { title: 'Mean Stack',
   places: places,
myname: myname 
});
});

module.exports = router;
