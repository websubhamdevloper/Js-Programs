let sentence = "The cat sat on the mat with the cat";
console.log("Includes cat?", sentence.includes("cat"));
console.log("Includes dog?", sentence.includes("dog"));
console.log("Starts with 'the'", sentence.startsWith("The"));
console.log("Starts with 'cat'", sentence.startsWith("cat"));
console.log("Ends with 'cat'", sentence.endsWith("cat"));
console.log("Ends with 'mat'", sentence.endsWith("mat"));

let replaced = sentence.replace("cat", "dog");
console.log("replaced the cat from the sentence:", replaced);
let replacedAll = sentence.replaceAll("cat", "dog");
console.log(
  "replaced all the cat word from the sentence with dog: ",
  replacedAll,
);

let userName = "Subham@@@kundu";
let cleaned = userName.replace("@@@", " ");
console.log("Before cleaning: ", userName);
console.log("After cleaning: ", cleaned);
