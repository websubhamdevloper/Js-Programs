let evenCount = 0;
let evenArray = [];
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    evenArray.push(i);
    evenCount++;
  }
}
console.log(`Number of even number from 1 to 50: ${evenCount}`);
console.log(`The array of even is ${evenArray}`);
