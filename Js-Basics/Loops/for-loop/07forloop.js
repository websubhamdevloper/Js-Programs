const reverseString = function (str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

console.log("Original string: Hello World");
console.log("reversed string: " + reverseString("Hello World"));
