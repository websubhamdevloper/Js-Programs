//Shallow copy
let address = {
  street: "Champasari More",
  city: "Siliguri",
  zip: 743001,
};

let company = {
  name: "UltraZed",
  address: address,
};

let companyCopy = { ...company };
companyCopy.address.city = "Kolkata";

//shallow issue
console.log("original city:", company.address.city);
console.log("copy city:", companyCopy.address.city);

//Deep copy requires spreading nested objects
let company2 = {
  name: "WikPredo",
  address: {
    street: "Baghajatin colony",
    city: "Siliguri",
    country: "India",
  },
};
let company2copy = {
  ...company2,
  address: { ...company2.address },
};

company2copy.address.city = "Jalpaiguri";
console.log("Original city", company2.address.city);
console.log("Copy city:", company2copy.address.city);

let users = [
  { id: 1, name: "Subham" },
  { id: 2, name: "Raja" },
];

let newUser = { id: 3, name: "Viraj" };
let updateUsers = [...users, newUser];
console.log("Updated users are:", updateUsers);
