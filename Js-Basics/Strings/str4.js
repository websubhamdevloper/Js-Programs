let text = "apple,banana,orange,grape,mango";
let fruits = text.split(",");
console.log("original string: ", text);
console.log("After split : ", fruits);
console.log("first fruit:", fruits[0]);
console.log("Last fruits:", fruits[fruits.length - 1]);

let sentence = "the quick brown fox!";
let words = sentence.split(" ");
console.log("words: ", words);

let word = "hello!";
let characters = word.split("");
console.log("Characters from the word ", word, ": ", characters);

let rejoin = fruits.join(",");
console.log("fruits after join method:", rejoin);

let combinedChars = characters.join("");
console.log(combinedChars);

let csvData = "Subham,21,SoftwareDeveloper";
let userDataProcessed = csvData.split(",");
console.log("processed csv data is ", userDataProcessed);
