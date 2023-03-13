// Assignment Code
var generateBtn = document.querySelector("#generate");
var output = document.querySelector("#password");

function showPassword(password) {
  console.log(password);
  
  
}

// Write password to the #password input

function generatePassword(passwordObj) {
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var specialChars = ["!", , "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "["]

  var password = [];
  var passwordText = [];

  if (passwordObj.lower) {
    password = password.concat(lower);
  }

  if (passwordObj.upper) {
    password = password.concat(upper);
  }

  if (passwordObj.numbers) {
    password = password.concat(numbers);
  }

  if (passwordObj.specialChars) {
    password = password.concat(specialChars);
  }

for (var i = 0; i < passwordObj.amount; i++) {
  var randomGenerator = password[Math.floor(Math.random() * password.length)];

  passwordText.push(randomGenerator);
}

showPassword(passwordText);
}

function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

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
