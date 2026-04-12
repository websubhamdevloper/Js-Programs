const sum = (a, b, c) => {
  return a + b + c;
};

let number = [10, 20, 30];
let resultWithoutSpreadOperator = sum(number[0], number[1], number[2]);
console.log("Result without spread operator:", resultWithoutSpreadOperator);

let resultSpread = sum(...number);
console.log("With spread operator:", resultSpread);

let values = [5, 10, 15, 20, 8, 3];
console.log("Maximum :", Math.max(...values));
console.log("Minimum :", Math.min(...values));

const concatenateStrings = (...strings) => {
  return strings.join(" ");
};

let words = ["Hello", "World", "from", "JavaScript"];
console.log("Concatenated :", concatenateStrings(...words));

let array1 = [1, 2, 3, 4];
let array2 = [4, 5, 6];
let resultArr = [...array1];
resultArr.push(...array2);
console.log("final array:", resultArr);

const createUser = (id, name, ...attributes) => {
  return {
    id: id,
    name: name,
    attributes: attributes,
  };
};

let user = createUser(
  23,
  "Raja Kundu",
  "DevOps Engineer",
  "BCA",
  "Team Lead",
  "6yrs+",
  "Syllab+core CEO",
);
console.log("User details:", user);
