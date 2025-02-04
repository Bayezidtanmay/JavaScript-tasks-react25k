/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/

const findMinMax = () => {
  let small = 0;
  let large = 0;
  let how_many = Number(window.prompt("How many numbers you want to input?:"));
  console.log(`You choose to enter ${how_many} numbers `);
  for (i = 0; i < how_many; i++) {
    let enter_number = Number(window.prompt("Enter numbers:"));
    console.log(enter_number);
    small = Math.min(enter_number);
    large = Math.max(enter_number);
  }
  console.log("small number", small);
  console.log("large number", large);
};
findMinMax();
