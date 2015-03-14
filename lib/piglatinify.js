module.exports = function(name) {
var nameArray = name.split('');
 var letters;
 var changedName; //the pig-latinified name we return
 var vowelHash = {a: 1, e: 1, i: 1, o:1, u:1, A: 1,
E: 1, I: 1, O: 1, U: 1};
if (vowelHash.hasOwnProperty(nameArray[0])) {
 return name + "-hay";
 }
	letters = nameArray.shift();
changedName = nameArray.join("") + "-" + letters + "ay";
return changedName;
};

