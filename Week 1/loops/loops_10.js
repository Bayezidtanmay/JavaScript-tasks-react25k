/* 
Write a function named countdownTimer:
- Take a number (e.g., 10) as input and simulate a countdown in the console.
Log each number in descending order until 0, and then log: "Time's up!".
 */

const countdownTimer = () => {
  let number = Number(window.prompt("Enter a number:"));
  for (i = 0; i < number + 1; i++) {
    console.log(number - i);
  }
  console.log("Times up!");
};
countdownTimer();
