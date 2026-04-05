let userInput = ["abc", "-5", "0", "25"];
let inputIndex = 0;
let validNumber = null;

while (validNumber === null) {
  let input = userInput[inputIndex];
  let number = parseInt(input);

  if (!isNaN(number) && number > 0) {
    validNumber = number;
    console.log(`Valid input received : ${validNumber}`);
  } else {
    console.log(`invalid input : ${input} - try again !`);
    inputIndex++;
  }
}

console.log("User entered: " + validNumber);
