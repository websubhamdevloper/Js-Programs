for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum of 100 digit is " + sum);

let tableNumber = 5;
for (let i = 1; i <= 10; i++) {
  let result = tableNumber * i;
  console.log(`${tableNumber} x ${i} = ${result}`);
}
