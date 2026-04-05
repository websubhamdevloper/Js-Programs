function checkEligiblity(age, hasLicense, hasInsurance) {
  if (age >= 18) {
    if (hasLicense) {
      if (hasInsurance) {
        return "Eligible to drive";
      } else {
        return "Need Insurance to drive";
      }
    } else {
      return "Need driving License to drive";
    }
  } else {
    return "Too young to drive";
  }
}

console.log(checkEligiblity(25, true, true));
console.log(checkEligiblity(18, true, false));
console.log(checkEligiblity(16, true, true));
