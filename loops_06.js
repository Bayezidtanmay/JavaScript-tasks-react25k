/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

const askToContinue = () => {
  let amount = 0;
  let count = 0;
  while (true) {
    let ask = Number(window.prompt("Enter a number"));
    console.log(ask);
    let ans = String(
      window.prompt("Do you want to continue giving numbers? [y/n]:")
    );
    if (ans == "y") {
      askToContinue();
    } else {
      amount = amount + ask;
      count++;
    }
    let average = amount / count;
    console.log(average);
  }
};
askToContinue();
