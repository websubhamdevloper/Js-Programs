let messyInput = "    Hello world      ";
let paddedEmail = "  username@mymail.com   ";
let mixedSpace = "  JavaScript   Programming         ";

let trimmed = messyInput.trim();
console.log("trimmed:", trimmed + "!");

let trimmedStart = messyInput.trimStart();
console.log("Trimmed from the start:", trimmedStart + "!");

let trimmedEnd = messyInput.trimEnd();
console.log("Trimmed from the end:", trimmedEnd + "!");

let userEmail = paddedEmail.trim();
console.log("The user email is ", userEmail);

let userName = "    Subham Kundu".trim();
console.log("the user name is ", userName);

let userInput = "   Hello, my dear friends!   ".trim().toLowerCase();
console.log("The message from the user is '", userInput, "'");
