let employee = {
  id: 101,
  name: "Subham Kundu",
  department: "Engineering",
  salary: 75000,
  bonus: 5000,
  yearsExperience: 5,
  isManager: true,
};

console.log("All properties of the employee");
for (let key in employee) {
  console.log(key, ": ", employee[key]);
}

console.log("Numeric properties only: ");
for (let key in employee) {
  if (typeof employee[key] === "number") {
    console.log(key, ": ", employee[key]);
  }
}

console.log("String properties only: ");
for (let key in employee) {
  if (typeof employee[key] === "string") {
    console.log(key, ": ", employee[key]);
  }
}

console.log("Keys containing 'e':");
for (let key in employee) {
  if (key.toLowerCase().includes("e")) {
    console.log(key, ": ", employee[key]);
  }
}
