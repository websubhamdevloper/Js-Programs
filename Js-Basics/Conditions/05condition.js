function canRentApartment(age, salary, creditScore) {
  if (age >= 21 && salary >= 30000 && creditScore >= 600) {
    return "Rental application APPROVED";
  } else if (salary >= 100000 || creditScore >= 750) {
    return "Rental application APPROVED with special review!";
  } else {
    return "Rental application DENIED";
  }
}

console.log(canRentApartment(21, 29000, 450));
console.log(canRentApartment(34, 89000, 650));
console.log(canRentApartment(17, 120000, 850));
console.log(canRentApartment(54, 40000, 500));
