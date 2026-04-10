let employee = {
  id: 101,
  name: "Subham kundu",
  address: {
    location: "champasari more",
    city: "Siliguri",
    district: "Derjeeling",
  },
};

let {
  name,
  address: { location, city, district },
} = employee;
console.log("Name of the employee is ", name);
console.log(
  "Detailed address of the employee is: ",
  location,
  " ,",
  city,
  ", ",
  district,
);
