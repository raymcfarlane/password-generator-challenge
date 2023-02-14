var generateBtn = document.querySelector("#generate");

function writePassword(word) {
  var passwordText = document.querySelector("#password");
  passwordText.value = word;
};

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
  var charset = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength= 8;
  var password= "";
for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * charset.length);
  password += charset.substring(randomNumber, randomNumber +1);
 }
  returnpassword;
    document.getElementById("password").value = password;
};


generateBtn.addEventListener("click",generatePassword);
generateBtn.addEventListener("click", Prompt);