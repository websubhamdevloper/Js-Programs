function calculateFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log("factorial of 5 is " + calculateFactorial(5));
console.log("factorial of 10 is " + calculateFactorial(10));
console.log("factorial of 87 is " + calculateFactorial(87));
