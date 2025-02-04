/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/

const sumAndAverage = () => {
  let small = [];
  let large = [];
  let sum = 0;
  let count = 0;
  for (i = 0; i < 10; i++) {
    let input = Number(window.prompt("Input numbers:"));
    console.log(input);
    sum = sum + input;
    count++;
    small = Math.min(input);
    large = Math.max(input);
  }
  let average = sum / count;
  console.log("sum of the numbers", sum);
  console.log("average of the numbers", average);
  console.log(small);
  console.log(large);
};
sumAndAverage();
