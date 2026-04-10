let str1 = "apple";
let str2 = "apple";
let str3 = "Apple";
console.log("'apple' === 'apple':", str1 === str2);
console.log("'apple' === 'Apple':", str1 === str3);

console.log(
  "'apple' (lower) === 'Apple' (lower)",
  str1.toLowerCase() === str3.toLowerCase(),
);

let fruits = ["banana", "apple", "cherry", "date"];
console.log("Original array is ", fruits);
let sorted = fruits.sort();
console.log("Sorted array of Fruits is", sorted);

let word1 = "apple";
let word2 = "banana";
let comparison = word1.localeCompare(word2);
if (comparison < 0) {
  console.log("Apple comes after banana");
} else if (comparison > 0) {
  console.log("Apple comes after banana");
} else {
  console.log("apple and banana are equal!");
}

let names = ["Subham", "viraj", "raja", "Subho"];
console.log("The original array of name is ", names);

let sortedNames = names.sort((a, b) => {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log("Sorted Names ", sortedNames);

let reverseSort = fruits.slice().sort().reverse();
console.log(reverseSort);
