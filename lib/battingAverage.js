module.exports = function() {  //need to re-read that module exports article

var batAvg = [
{ player: "Ty Cobb", avg:".3664" },
{ player: "Rogers Hornsby", avg:".3585" },
{ player: "Shoeless Joe Jackson", avg:".3558" },
{ player: "Lefty O'Doul", avg:".3493" },
{ player: "Ed Delahanty", avg:".3458" },
{ player: "Tris Speaker", avg:".3447" },
{ player: "Billy Hamilton", avg:".3444" },
{ player: "Ted Williams", avg:".3444" },
{ player: "Dan Brouthers", avg:".3421" },
{ player: "Babe Ruth", avg:".3421" },
{ player: "Dave Orr", avg:".3420" },
{ player: "Harry Heilmann", avg:".3416" },
{ player: "Pete Browning", avg:".3415" },
{ player: "Willie Keeler", avg:".3413" },
{ player: "Bill Terry", avg:".3412" },
{ player: "Lou Gherig", avg:".3401" },
{ player: "George Sisler", avg:".3401" },
{ player: "Jesse Burkett", avg:".3382" },
{ player: "Tony Gwynn", avg:".3382" },
{ player: "Nap Lajoie", avg:".3382" }
]

var randomIndex = Math.floor(Math.random()*batAvg.length);
var returnBat = batAvg[randomIndex];
return returnBat;
};