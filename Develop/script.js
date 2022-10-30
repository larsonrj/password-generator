// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Create user input for password length criteria. "+" converts the string input to a number
  var passwordLength = prompt(
    "Input the length of the password between 8 and 128 characters:"
  );
  console.log("Password length: " + passwordLength);

  // Validation to ensure password length is between 8 and 128 characters
  if (
    passwordLength >= 8 &&
    passwordLength <= 128 &&
    passwordLength % Math.floor(passwordLength) === 0
  ) {
    // When password length is validated prompts to include lowercase letters
    var lower = confirm("Include lowercase letters? OK=Yes, Cancel=No");
    var upper = confirm("Include uppercase letters? OK=Yes, Cancel=No");
    var numeric = confirm("Include numeric characters? OK=Yes, Cancel=No");
    var special = confirm("Include special characters? OK=Yes, Cancel=No");
    // If user cancels input, exits out of the writePassword function
  } else if (passwordLength === null) {
    return;
  }
  // Returns to start of function if password length is incorrect value
  else {
    alert("Please input a valid password length.");
    writePassword();
  }

  console.log("Use lowercase characters: " + lower);
  console.log("Use uppercase characters: " + upper);
  console.log("Use numeric characters: " + numeric);
  console.log("Use special characters: " + special);

  if (
    lower === false &&
    upper === false &&
    numeric === false &&
    special === false
  ) {
    alert("Please select at least one character type.");
  } else {
    return;
  }
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
