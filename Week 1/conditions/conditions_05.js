/* 
Write a function named checkAnimal:
Take a parameter animalType.
Use a ternary operator to return:
"You have a clever companion!" if animalType is "fox".
"Not a fox, but still cool!" otherwise.
Call the function with values like "fox" and "cat". 
*/

let animal1 = "Fox";
const checkAnimal = (animalType) => {
  if (animalType == animal1) {
    return "You have a clever companion!";
  } else if (animalType != animal1) {
    return "Not a fox, but still cool!";
  }
};
console.log(checkAnimal("Fox"));
console.log(checkAnimal("Dog"));
