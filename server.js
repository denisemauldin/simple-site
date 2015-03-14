var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000;
var piglatinify = require("./lib/piglatinify.js");
var jokeLib = require("./lib/jokes.js");
var quoteLib = require("./lib/quote.js");
var batAvgLib = require("./lib/battingAverage.js");
var morseCodeLib = require("./lib/morsecodify.js");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/app/"));

app.get("/", function(req, res){
	//res.send("hello, world!");
	res.sendFile(index.html)
});

app.post("/piglatin", function(req, res) {
	// console.log(req);
	// console.log(req.body);
 var firstname = piglatinify(req.body.firstname);
 var lastname = piglatinify(req.body.lastname);
 var piglatined = {firstname: firstname, lastname: lastname};
 res.json(piglatined);
});

app.post("/morseCode", function (req, res) {
   var morse = morseCodeLib(req.body.text);
   var codified = {text: morse};
   res.json(codified);
});

app.get("/quote", function (req, res){
 // var randomIndex = Math.floor(Math.random()*quotes.length);
 var quoteSend = quoteLib();
 res.send(quoteSend);
});


app.get("/joke", function(req, res) {
 // var randomIndex = Math.floor(Math.random()*jokes.length);
 var jokeGen = jokeLib();
 res.json(jokeGen);
});

app.get("/battingAvg", function(req, res) {
 // var randomIndex = Math.floor(Math.random()*jokes.length);
 var avgGen = batAvgLib();
 res.json(avgGen);
});


 
// </script>
// app.post("/rotate", function (req, res) {

// }

app.listen(port, function(){
	console.log("server started on port " + port);
});


