let person = {
  name: "Subham Kundu",
  age: 21,
  email: "subhamkundu@gmail.com",
};

let { name: personName, age: personAge, email: personEmail } = person;
console.log("renamed variables->");
console.log("Person's name is ", personName);
console.log("Person's age is ", personAge);
console.log("Person's email is ", personEmail);

let { name: userName } = {
  name: "Subham Kundu",
};
let { name: productName } = {
  name: "HP Victus",
};

console.log("Username is ", userName);
console.log("Product name is ", productName);

let config = {
  host: "localhost",
};

let { host: serverHost = "127.0.0.1", port: serverPort = 3000 } = config;
console.log("Server host is ", serverHost);
console.log("Server port is ", serverPort);

let employee = {
  id: 1001,
  details: {
    fullName: "Subham Kundu",
    address: "champasari more",
  },
};

let {
  id: employeeId,
  details: { fullName: username, address: location },
} = employee;

console.log("Employee ID is ", employeeId);
console.log("Employee full name is ", username);
console.log("Employee address is ", location);

function displayBook({ title: bookTitle, author: bookAuthor }) {
  console.log("Book name is ", bookTitle);
  console.log("Author name is ", bookAuthor);
}

displayBook({
  title: "JavaScript Guide for Beginners ",
  author: "Subham Kundu",
});
