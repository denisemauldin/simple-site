module.exports = function(word) {
var wordArray = word.split('');
console.log(wordArray);
 var letters;
 var changedWord; //the pig-latinified name we return
 var codeHash = {A:".-", B:"-...", C:"-.-.", D:"-..", E:".", F:"..-.", G:"--.",
H:"....", I:"..", J:".---", K:"-.-", L:".-..", M:"--", N:"-.", O:"---", P:".--.",
Q:"--.-", R:".-.", S:"...", T:"-", U:"..-", V:"...-", W:".--", X:"-..-", 
Y:"-.--", Z:"--..", "1":".----", "2":"..---", "3":"...--", "4":"....-", "5":".....",
"6":"-....", "7":"--...", "8":"---..", "9":"----.", "0":"-----"};

// if (vowelHash.hasOwnProperty(nameArray[0])) {
//  return name + "-hay";
// }
// 	letters = nameArray.shift();
// changedName = nameArray.join("") + "-" + letters + "ay";
// return changedName;
return wordArray.join("");
};
