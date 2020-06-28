var length = prompt("Enter your length for password below. (Min 8 Max 128)");
if (length < 8 || length > 128) {
  alert("Password is either too short, or too long.");
  var length = prompt("Enter your length for password below. (Min 8 Max 128)");
}
var lowerCase = confirm(" Do you want to include lowercase?");
var upperCase = confirm("Do you want to include upper case?");
var numbers = confirm(" Do you want to include numbers?");
var symbols = confirm(" How about some symbols to make it extra secure?"); 



var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charSet = "";
  if (lowerCase) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperCase) {
    charSet += "ABCDEFGHIJKLMNOPQRSSTUVWXYZ";
  }
  if (numbers) {
    charSet += "0123456789";
  }
  if (symbols) {
    charSet += "!@#$%&*_";
  }
  var returnVal = "";
  
  
  // stupid loop fix this dumb thing!!!!


  for (var i = 0, n = charSet.length; i < length; i++) {
    
    returnVal += charSet.charAt(Math.floor(Math.random() * n));
 
}
  console.log(returnVal);
  return returnVal;
} 



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);