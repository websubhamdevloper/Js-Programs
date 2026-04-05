const findCommonElements = (arr1, arr2) => {
  let commonElements = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        if (!commonElements.includes(arr1[i])) {
          commonElements.push(arr1[i]);
        }
        break;
      }
    }
  }
  return commonElements;
};

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [4, 5, 6, 7, 8, 9];

let common = findCommonElements(array1, array2);
console.log("The common value array is " + common);

let fruits1 = ["apple", "banana", "orange", "grape"];
let fruits2 = ["banana", "mango", "grape", "pear"];

let commonFruits = findCommonElements(fruits1, fruits2);
console.log("\nFruits 1:", fruits1);
console.log("Fruits 2:", fruits2);
console.log("Common fruits:", commonFruits);
