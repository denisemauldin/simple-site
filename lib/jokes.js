module.exports = function() {  //need to re-read that module exports article

var jokes = [
{ setup: "what are the sexiest animals in the barnyard?", punchline: "Brown chicken brown cow!"},
{ setup: "how many tickles does it take to make an octopus laugh?", punchline: "ten tickles"},
{ setup: "where do aliens surf?", punchline: "in the galax-sea!"},
{ setup: "what do prisoners use to call each other?", punchline: "cell phones!"},
{ setup: "what has four legs but can't walk?", punchline: "a table"},
{ setup: "what is brown and sticky?", punchline: "a stick"},
{ setup: "what does a nosey pepper do?", punchline: "get jalapeno business"},
{ setup: "what do you call an alligator in a vest?", punchline: "an investigator"},
{ setup: "what do you get from a spoiled cow?", punchline: "sour cream"}
]

var randomIndex = Math.floor(Math.random()*jokes.length);
var returnVal = jokes[randomIndex];
return returnVal;
};