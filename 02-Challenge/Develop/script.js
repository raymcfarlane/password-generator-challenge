var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var abcOptions = "abcdefghijklmnopqrstuvwxyz"
var numberOptions = "1,2,3,4,5,6,7,8,9";
var specialCharacterOptions = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var abcOptionsUpperCase = abcOptions.toUpperCase();


function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function Prompt () {
  var password;
  var passwordPrompt = prompt("Would you like to create a password? Enter yes or no.");
  passwordPrompt = passwordPrompt.toLowerCase();
  if (passwordPrompt === "yes") {
   password = generatePassword();
  }
  writePassword(password)
}

function generatePassword(){
 var length = passwordLength();
 var charSelection = characters();
 var finalPassword = "";
for (var i = 0; i <= length; i++) {
  var randSelection = Math.floor(Math.random() * charSelection.length);
    finalPassword += charSelection[randSelection];
  }
  return finalPassword;
};


generateBtn.addEventListener("click",writePassword);
generateBtn.addEventListener("click", Prompt);
