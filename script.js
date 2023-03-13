// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword(passwordObj) {
  console.log(passwordObj);


}

function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  var characterAmount = prompt("How many characters would you like? (8 - 128)");
  var parsedAmount = parseInt(characterAmount);
  var addLowerCase = confirm("Would you like lowercase characters?");
  var addUpperCase = confirm("Would you like uppercase characters?");
  var addNumbers = confirm("Would you like numbers?");
  var addSpecialChars = confirm("Would you like special characters?");

  var password = {
    amount: parsedAmount,
    lower: addLowerCase,
    upper: addUpperCase,
    numbers: addNumbers,
    specialChars: addSpecialChars
  };

  generatePassword(password);
  // passwordText.value = password;

}



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
