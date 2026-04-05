const number = [45, 23, 78, 12, 89, 34, 56, 90, 11];
let max = number[0];
let index = 0;

for (let i = 1; i < number.length; i++) {
  if (number[i] > max) {
    max = number[i];
    index = i;
  }
}
console.log("The max value from the array is " + max);
console.log("Index of the value is " + index);
