/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/

const calculateAverageSpeed = () => {
  let distance;
  let time;
  let speed;
  while (true) {
    distance = Number(window.prompt("Enter distance (in kilomers):"));
    console.log("Entered distance", distance);
    if (distance == 0) {
      break;
    }
    time = Number(window.prompt("Enter time (in hours):"));
    console.log("Entered time", time);
    speed = distance / time;
    console.log("Average speed", speed);
  }
};
calculateAverageSpeed();
