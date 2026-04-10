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

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let [[a, b], [c, d]] = matrix;
console.log("matrix showcase ");
console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);
console.log("d: ", d);

let product = {
  title: "Laptop",
  prices: [999, 899, 799],
  specs: {
    cpu: "Intel i7",
    ram: "16GB",
  },
};

let {
  title,
  prices: [original, sales, student],
  specs: { cpu, ram },
} = product;

console.log("Laptop Bazzar");
console.log("title:", title);
console.log("Original Price:", original);
console.log("Sales price", sales);
console.log("Student discount", student);
console.log("Specs:", cpu, ",", ram);

let config = {
  server: {
    host: "Localhost",
    port: 3000,
    database: {
      Servername: "mydb",
    },
  },
};

let {
  server: {
    host,
    database: { Servername, url = "default url of the database" },
  },
} = config;

console.log("host name is ", host);
console.log("server name is ", Servername);
console.log("url is ", url);
