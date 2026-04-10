function person({ name, age }) {
  console.log("Name of the person is " + name);
  console.log("Age of the person is " + age);
}

person({ name: "Subham", age: 21 });

function greetUser({ username = "Guest", role = "User" } = {}) {
  console.log("Hello " + username + ", you are a", role);
}
greetUser({ username: "Subham kundu", role: "Admin" });
greetUser();

function sumfirsttwo([a, b]) {
  return a + b;
}
console.log("Sum of [10, 20]:", sumfirsttwo([10, 20]));

function displayProduct({ title, specs: { cpu, ram } }) {
  console.log("Product:", title);
  console.log("CPU :", cpu);
  console.log("RAM:", ram);
}

displayProduct({
  title: "Gaming Laptop",
  specs: {
    cpu: "i7",
    ram: "16gb",
  },
});

function printScore([first, second, ...rest]) {
  console.log(first);
  console.log(second);
  console.log(rest);
}
printScore([93, 90.5, 84, 87, 56, 78]);

function calculatePrice({ quantity, pricePerUnit }, { taxRate = 0.1 } = {}) {
  let subtotal = quantity * pricePerUnit;
  let tax = subtotal * taxRate;
  let total = subtotal + tax;
  return {
    subtotal: subtotal,
    tax: tax,
    total: total,
  };
}

let result = calculatePrice(
  { quantity: 5, pricePerUnit: 20 },
  { taxRate: 0.99 },
);
console.log(result);
