let colors = ["red", "yellow", "green", "blue", "black"];
let [col1, col2, col3, ...restColors] = colors;
console.log(colors);
console.log(col1);
console.log(col2);
console.log(col3);
console.log(restColors);

let [fruit1, fruit2, fruit3] = ["apple", "mango", "guava"];
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

let numbers = [10, 20, 30, 40, 50];
let [first, , , , last] = numbers;
console.log(numbers);
console.log(first);
console.log(last);

let [firstNum, ...lastNumbers] = numbers;
console.log(firstNum);
console.log(lastNumbers);
