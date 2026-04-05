function gradeStudent(marks) {
  if (marks >= 90) {
    return "grade: A";
  } else if (marks >= 80) {
    return "Grade: B";
  } else if (marks >= 70) {
    return "Grade: C";
  } else if (marks >= 60) {
    return "grade: D";
  } else {
    return "Grade: F (Fail)";
  }
}

console.log(gradeStudent(95));
console.log(gradeStudent(61));
console.log(gradeStudent(79));
