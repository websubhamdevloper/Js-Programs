function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day Number";
  }
}

console.log(getDayName(2));
console.log(getDayName(7));
console.log(getDayName(9));
console.log(getDayName(4));
