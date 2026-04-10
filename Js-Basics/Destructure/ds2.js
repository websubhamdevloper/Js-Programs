let person = {
  name: "Subham Kundu",
  age: 21,
  city: "siliguri",
};

let { name: personName, age: personAge, city: personCity } = person;
console.log("Name of the person is ", personName);
console.log("Age of the person is ", personAge);
console.log("City of the person is ", personCity);

let { name, age, city } = person;
console.log("name is of the user is ", name);
console.log("age is of the user is ", age);
console.log("city is of the user is ", city);

let { name: userName } = person;
console.log("Name of the person is ", userName);

let user = {
  username: "Subham Kundu",
  email: "subhamkundu@gmail.com",
};

let { username, email, phone } = user;
console.log(username);
console.log(email);
console.log(phone);

let {
  username: uname = "Guest-name",
  email: userEmail = "guest@gmail.com",
  phone: userPhone = "N/A",
} = user;

console.log("Name is ", uname);
console.log("Name is ", userEmail);
console.log("Name is ", userPhone);

function displayUser({
  name = "Unknown",
  role = "Unknown",
  active = "false",
} = {}) {
  console.log("Name is ", name);
  console.log("Role is ", role);
  console.log("Active is ", active);
}

displayUser();
displayUser({ name: "subham kundu", role: "S-developer", active: true });
