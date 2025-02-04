/* 
Write a function named validatePassword:
- Use a loop to allow the user to input a password.
- If the password is "correct123", log: "Access granted!" and exit the loop.
- If incorrect, prompt the user again with: "Try again!".
 */

const validatePassword = (note) => {
  while (true) {
    let pass = window.prompt("Enter password:");
    if (pass == "correct123") {
      console.log("Acees granted!");
      break;
    } else {
      console.log("Try again!");
    }
  }
};
validatePassword();
