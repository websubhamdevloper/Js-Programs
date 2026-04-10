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

let [, , { id, username }] = users;
console.log(id, username);

let [first, ...others] = users;
console.log("first user details: ", first);
console.log("Other user details: ", others);

let data = {
  scores: [90, 78, 85, 98],
  name: "Vikrant",
  metaData: {
    subjects: ["Math", "Physics", "English", "Chemistry"],
  },
};

let {
  scores: [firstScore, secondScore],
  name: StudentName,
  metaData: {
    subjects: [subject1],
  },
} = data;

console.log("Student report");
console.log("First score is ", firstScore);
console.log("Second score is ", secondScore);
console.log("Subject is ", subject1);
console.log("Student name  is ", StudentName);

let apiResponse = {
  status: 200,
  data: {
    users: [
      {
        username: "Subham kundu",
        email: "SubhamKundu@gmail.com",
      },
      {
        username: "Viraj Kundu",
        email: "virajHello@gmail.com",
      },
    ],
  },
};

let {
  data: {
    users: [{ username: apiUsername, email }]
  }
} = apiResponse;

console.log("Username from Api is ", apiUsername);
console.log("Email from Api is ", email);
console.log();
