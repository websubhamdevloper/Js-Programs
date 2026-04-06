const validatePassword = (password) => {
  let requirements = {
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
    isLongEnough: false,
    isvalid: false,
  };

  let index = 0;
  while (index < password.length) {
    let char = password[index];

    if (char >= "A" && char <= "Z") {
      requirements.hasUpperCase = true;
    }
    if (char >= "a" && char <= "z") {
      requirements.hasLowerCase = true;
    }
    if (char >= "0" && char <= "9") {
      requirements.hasNumber = true;
    }
    let specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?";
    if (specialChars.includes(char)) {
      requirements.hasSpecialChar = true;
    }
    index++;
  }
  if (password.length >= 8) {
    requirements.isLongEnough = true;
  }
  if (
    requirements.hasUpperCase &&
    requirements.hasLowerCase &&
    requirements.hasNumber &&
    requirements.hasSpecialChar &&
    requirements.isLongEnough
  ) {
    requirements.isvalid = true;
  }
  return requirements;
};

let password1 = "password";
const { isvalid, ...restReasons } = validatePassword(password1);

console.log("Password is " + password1);
if (isvalid) {
  console.log("requirements met: YES");
} else {
  console.log("Requierements met: NO");
}

console.log("requirements are -> ", restReasons);
