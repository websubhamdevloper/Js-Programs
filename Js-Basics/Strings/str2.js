let text = "JavaScript programming";
let substr1 = text.slice(0, 4);
let substr2 = text.slice(4, 10);
let substr3 = text.slice(11);
console.log(substr1);
console.log(substr2);
console.log(substr3);

let subtext = text.substring(0, 4);
console.log(subtext);

let sliceStr = text.slice(-11);
console.log(sliceStr);

let firstName = "Subham";
console.log("First 3 letters of ", firstName, "is ", firstName.slice(0, 3));

let sentence = "hello!";
console.log(
  "remove the last char from ",
  sentence,
  ": ",
  sentence.slice(0, -1),
);
