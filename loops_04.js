/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

const countEvenNumbers = () => {
  let numbers;
  let even = 0;
  for (i = 0; i < 20; i++) {
    numbers = Number(window.prompt("Input numbers"));
    console.log(numbers);
    if (numbers % 2 == 0) {
      even++;
    }
  }
  console.log("The amount of even numbers", even);
};

countEvenNumbers();
