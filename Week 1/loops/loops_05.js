/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */

function calculateAverageUntilZero() {
  let sum = 0;
  let count = 0;
  while (true) {
    let number = Number(
      window.prompt("Please enter a number (enter 0 to stop):")
    );
    console.log(number);
    if (number === 0) {
      break;
    }
    sum += number;
    count++;
  }
  let average = sum / count;
  console.log(`The average of the entered numbers is: ${average}`);
}
calculateAverageUntilZero();
