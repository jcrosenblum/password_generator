// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
//lots of code here


return "new password"
}
//var letters = ["a", "b", "c", "d"]

//for( var i = 0; i < letters.length; i += 2){
 // console.log(letters[i])
//}

// var dog = true
// var number = 10
// var string = "true"
// var cat = false

// if ( dog ===true && dog == string){
//   console.log("true")
// }
// else{
//   console.log("false")
// }

// function add(a,b){// a and b are parameters/inputs
//   return a + b
// }
// var result = add(3,3)

// if( result < 8){
//   alert("your password needs to be greater than 8")
// return
// }

// function hello(){
// var iife = add(3,3)

// return iife
// }
// hello()