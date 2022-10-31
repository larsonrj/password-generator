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
    // When password length is validated, continues to charInput function.
  }
  // Exits function if passwordLength is cancelled.
  else if (passwordLength === null) {
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

  // function to provide boolean value for each variable in charTypes object
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

  // Run charInput function. If all are false re-runs function until at least one is true and log values to console.
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

  // Log boolean values for character selection
  console.log("Use lowercase characters: " + charTypes.lowercase);
  console.log("Use uppercase characters: " + charTypes.uppercase);
  console.log("Use numeric characters: " + charTypes.numeric);
  console.log("Use special characters: " + charTypes.special);

  // create variables for all character types
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var upperChar = lowerChar.toUpperCase();
  var numChar = "0123456789";
  var specChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Possible combinations for charInput
  if (charTypes.lowercase === true) {
    var charUsed = lowerChar;
  } else {
    var charUsed = "";
  }

  if (charTypes.uppercase === true) {
    var charUsed = charUsed + upperChar;
  } else {
  }

  if (charTypes.numeric === true) {
    var charUsed = charUsed + numChar;
  } else {
  }

  if (charTypes.special === true) {
    var charUsed = charUsed + specChar;
  } else {
  }

  // Log character values used for password
  console.log("Characters used: " + charUsed);

  // Function to create array with random characters with a length of the password length
  function generatePassword(passwordLength) {
    for (i = 0; i < passwordLength; i++) {
      var randomChar = charUsed.charAt(
        Math.floor(Math.random() * charUsed.length)
      );
      var arr = [];
      var result = arr.concat(result, arr.splice(i, 0, randomChar));
    }
    var password = result.join("");
    return password;
  }

  // Call generate password function
  var password = generatePassword(passwordLength);

  // Log password to the console
  console.log("Your password is: " + password);
  console.log("Password length is: " + password.length);

  // Add text to the html document to update with your new password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
