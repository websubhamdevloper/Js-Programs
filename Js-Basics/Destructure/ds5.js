let users = [
  {
    id: 1,
    username: "Subham",
    role: "Admin",
  },
  {
    id: 2,
    username: "Raja",
    role: "User",
  },
  {
    id: 3,
    username: "Viraj",
    role: "Admin",
  },
];

let [{ id: firstId, username: uname }] = users;
console.log("First user is ", uname, " with id ", firstId);

let [,,{id, username}] = users;
console.log(id, username);

let [first, ...others] = users;
console.log(first)
console.log(others)
