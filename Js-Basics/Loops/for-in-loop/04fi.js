let students = {
  student1: {
    name: "subham",
    marks: 85,
    grade: "A",
  },
  student2: {
    name: "viraj",
    marks: 72,
    grade: "B",
  },
  student3: {
    name: "raja",
    marks: 90,
    grade: "A",
  },
};

for (let studentKey in students) {
  let student = students[studentKey];
  console.log(studentKey, " -->");
  for (let property in student) {
    console.log("! ", property, ":", student[property]);
  }
}
