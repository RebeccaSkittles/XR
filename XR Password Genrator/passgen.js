const passwordGenerator = () => {
  // Get the length of the password from the input field.
  const length = document.getElementById("length").value;

  // Get the checkbox values.
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-symbols").checked;

  // Create a string of all possible characters that can be used in a password.
  const possibleCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  if (includeNumbers) {
    possibleCharacters += "0123456789";
  }
  if (includeSymbols) {
    possibleCharacters += "!@#$%^&*()-=+;:'\",.<>?";
  }

  // Create a random password of the specified length.
  let randomPassword = "";
  for (let i = 0; i < length; i++) {
    // Get a random character from the possible characters string.
    const randomChar = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];

    // Add the random character to the random password string.
    randomPassword += randomChar;
  }

  // Set the value of the password input field to the generated password.
  document.getElementById("password").value = randomPassword;
};

document.getElementById("generate-password").addEventListener("click", passwordGenerator);
