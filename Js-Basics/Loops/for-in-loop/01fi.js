let person = {
  name: "Subham Kundu",
  age: 21,
  city: "Siliguri",
  occupation: "Unknown",
};

for (let key in person) {
  console.log(key, " :", person[key]);
}
