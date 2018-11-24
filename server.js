// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;


// ROUTES
// ==============================================


// we'll create our routes here
// get an instance of router
var router = express.Router();


// home page route (http://localhost:8080)
router.get('/', function(req, res) {
    res.send('im the home page!');  
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
    res.send('im the about page!'); 
});

// test route page (http://localhost:8080/about)
router.get('/test', function(req,res){
    res.send('Hello World!');
});
// apply the routes to our application
app.use('/', router);

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);

