function checkAge(age) {
  if (age >= 18) {
    return "You are an adult!";
  } else {
    return "you are a minor!";
  }
}

console.log(checkAge(12));
console.log(checkAge(21));
