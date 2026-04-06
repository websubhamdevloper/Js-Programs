let secretNumber = 7;
let guess = null;
let attempts = 0;
let flag = false;

let guesses = [3, 8, 5, 7];
let guessIndex = 0;

while (guess != secretNumber) {
  guess = guesses[guessIndex];
  attempts++;
  if (attempts <= guesses.length) {
    if (guess < secretNumber) {
      console.log(`Guess ${attempts} : ${guess} - Too Low!`);
    } else if (guess > secretNumber) {
      console.log(`Guess ${attempts} : ${guess} - Too high!`);
    } else {
      console.log(`Guess ${attempts}: ${guess} - correct guess!`);
      flag = true;
    }
    guessIndex++;
  } else {
    break;
  }
}

if (flag === true) {
  console.log("You have won the game");
} else {
  console.log("You haven't won the game");
}
