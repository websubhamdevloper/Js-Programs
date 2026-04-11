let [head, ...tail] = [1, 12, 3, 59, 21];
console.log("Head value is ", head);
console.log("Tail value is ", tail);
console.log("Tail value with rest method: ", ...tail);

let [first, second, ...rest] = ["a", "b", "c", "d", "e"];
console.log("First:", first);
console.log("Second:", second);
console.log("rest:", rest);
console.log("Using rest method in console:", ...rest);

let person = {
  name: "Subham Kundu",
  age: 21,
  city: "Siliguri",
  country: "India",
  profession: "Software Developer",
};

let { name, age, ...restInfo } = person;
console.log("Name of the special guest is ", name);
console.log("age of the special guest", name, "is ", age);
console.log("Other details of the special guest is", restInfo);

let arr1 = [1, 2, 3, 4];
let arr2 = [6, 7, 8, 9];
let combined = [...arr1, ...arr2];
console.log("Spread with array: ", combined);

let [a1, b1, ...restNums1] = [12, 34, 56, 78, 90];
let spreadback = [a1, b1, ...restNums1];
console.log(spreadback);

let [a2, b2, ...restNums2] = [12, 34, 56, 78, 90];
let spreadBackreverse = [a2, b2, ...restNums2].reverse();
console.log(spreadBackreverse);

let nums = [10, 20, 30, 40, 50].reverse();
console.log(nums);

let original = { x: 1, y: 2, z: 3 };
let { x, ...restProps } = original;
let clone = { x, ...restProps };
console.log(original);
console.log(clone);

function logInfo(name, ...others) {
  console.log(name);
  console.log(others);
}
logInfo("subham", "12.3.7.4", "Admin", "Sof-User");
