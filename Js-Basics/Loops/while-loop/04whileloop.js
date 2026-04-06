console.log("Countdown from 5 to 1: ");
let countdown = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Blast-off \n");
console.log("build string backwards:");
let word = "Hello World";
let index = word.length - 1;
let reverseword = "";

while (index >= 0) {
  reverseword += word[index];
  index--;
}

console.log("Original word: ", word);
console.log("Reversed word: ", reverseword);
