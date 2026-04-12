let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined);

let number1 = [1, 2, 3];
let number2 = [7, 8, 9];
let allNumbers = [...number1, 4, 5, 6, ...number2];
console.log(allNumbers);

let original = ["subham", "viraj"];
let clone = [...original];
console.log(clone);

let user = {
  id: 1,
  name: "subham",
  email: "subham@gmail.com",
};

let preferences = {
  theme: "dark",
  language: "English",
  notification: true,
  editor: "Zed",
};

let userProfile = { ...user, ...preferences };
console.log("Merged output is: ", userProfile);

let defaultSettings = {
  volume: 50,
  brightness: 80,
  autoPlay: false,
};

let userSettings = {
  volume: 75,
  brightness: 95,
};

let finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log("final settings of the user is ", finalSettings);

let defaultPerson = {
  firstName: "Subham",
  lastName: "Kundu",
};

let updatedPerson = {
  ...defaultPerson,
  age: 30,
  city: "Siliguri",
};

console.log("default value:", defaultPerson);
console.log("updated value:", updatedPerson);

let originalObj = {
  x: 1,
  y: 2,
  z: 3,
};
let copyObj = {
  ...originalObj,
};
copyObj.x = 99;
copyObj.z = 120;
console.log("Original object:", originalObj);
console.log("COpy object:", copyObj);

let employee = {
  id: 34,
  name: "Subham",
  password: "9#5&882@1",
  department: "Research Sector",
};

let { password, ...SafeEmployeedetails } = employee;
console.log(
  "removed the password from the public information to make it safer:",
  SafeEmployeedetails,
);
