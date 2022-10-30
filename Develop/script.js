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
    // When password length is validated provides confirmation for character length
    alert("Password Length: " + passwordLength + " Characters");
    // If user cancels input, exits out of the writePassword function
  } else if (passwordLength === null) {
    return;
  }
  // Returns to start of function if password length is incorrect value
  else {
    alert("Please input a valid password length.");
    writePassword();
  }

  // Create object for the character type boolean values
  var charTypes = {
    lowercase: 0,
    uppercase: 0,
    numeric: 0,
    special: 0,
  };

  function charInput() {
    charTypes.lowercase = confirm(
      "Include lowercase letters? OK=Yes, Cancel=No"
    );
    charTypes.uppercase = confirm(
      "Include uppercase letters? OK=Yes, Cancel=No"
    );
    charTypes.numeric = confirm(
      "Include numeric characters? OK=Yes, Cancel=No"
    );
    charTypes.special = confirm(
      "Include special characters? OK=Yes, Cancel=No"
    );
    return;
  }
  charInput();

  if (
    charTypes.lowercase === false &&
    charTypes.uppercase === false &&
    charTypes.numeric === false &&
    charTypes.special === false
  ) {
    alert("Please include at least one character type");
    charInput();
  }

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
