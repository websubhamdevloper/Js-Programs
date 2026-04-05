function checkJobEligiblity(userData) {
  let result = {
    eligible: false,
    reason: [],
    score: 0,
  };

  if (userData.age < 18) {
    result.reason.push("Too young - minimum age is 18!");
  } else if (userData.age > 65) {
    result.reason.push("Too old - maximum age is 65");
  } else {
    result.score += 20;
  }

  if (userData.experience >= 2) {
    result.score += 30;
  } else if (userData.expreience >= 1) {
    result.score += 15;
  }

  if (!userData.hasEducation) {
    result.reason.push("Need at least 1 year experience OR relevant education");
  } else if (userData.hasEducation) {
    result.score += 25;
  }

  if (userData.hasSkills) {
    result.score += 20;
  } else {
    result.reason.push("required job skills not demonstrated");
  }

  if (
    userData.employmentStatus === "Employed" ||
    userData.employmentStatus === "employed" ||
    userData.employmentStatus === "freelancer"
  ) {
    result.score += 5;
  }

  if (result.score >= 70 && result.reason.length === 0) {
    result.eligible = true;
  }

  return result;
}

// test case 1
// let candidate1 = {
//   age: 28,
//   experience: 3,
//   hasEducation: true,
//   hasSkills: true,
//   employmentStatus: "employed",
// };

// test case 2
// let candidate1 = {
//   age: 16,
//   experience: 2,
//   hasEducation: true,
//   hasSkills: true,
//   employmentStatus: "student"
// };

//test case 3
let candidate1 = {
  age: 35,
  experience: 1,
  hasEducation: true,
  hasSkills: false,
  employmentStatus: "unemployed"
};

const CandidateResult = checkJobEligiblity(candidate1);

console.log("Candidate eligible for the job: " + CandidateResult.eligible);
if (CandidateResult.reason.length === 0) {
  console.log("You have no reason to get rejected.");
} else {
  console.log("The reason for being rejected is ", CandidateResult.reason);
}
console.log("The total score is " + CandidateResult.score);


