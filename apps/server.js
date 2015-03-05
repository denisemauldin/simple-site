var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/apps/"));

app.get ("/", function(req, res) {
	// res.send("hello, universe!");
	res.sendFile("index.html");
});
var quotes = [
 "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison.",
 "No matter where you go, there you are. ",
 "If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. - Rear Admiral Grace Hopper, USN, Ph.D"];

var jokes = [
{ setup: "what are the sexiest animals in the barnyard?", 
punchline: "Brown chicken brown cow!"},
{ setup: "What was a jumpoline called after your mom jumped on it?", 
punchline: "Trampoline"},
{ setup: "how many tickles does it take to make an octopus laugh?",
punchline: "ten tickles"}
];

app.get ("/KMS", function(req, res) {
	//$("#randomText").text(randomFrom(quotes));
	 var randomIndex = Math.floor(Math.random()*quotes.length);
	res.send(quotes[randomIndex]);
});

app.get ("/joke", function(req, res) {
	var randomIndex = Math.floor(Math.random()*jokes.length);
	res.json(jokes[randomIndex]);
});

app.listen(port, function() {
	console.log("server started on port " + port);
});