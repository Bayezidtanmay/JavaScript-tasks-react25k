/* 
Write a function named getAnimalDescription:
Take a parameter favoriteAnimal.
Use a switch statement to:
If "fox", return "Foxes are sly and smart!"
If "dog", return "Dogs are loyal friends."
If "cat", return "Cats are curious and independent."
For any other animal, return "All animals are awesome!"
Call the function with different animal names. 
*/

let animal1 = "fox";
let animal2 = "dog";
let animal3 = "cat";

const getAnimalDescription = (favoriteAnimal) => {
  if (favoriteAnimal == animal1) {
    return "Foxes are sly and smart!";
  } else if (favoriteAnimal == animal2) {
    return "Dogs are loyal friends.";
  } else if (favoriteAnimal == animal3) {
    return "Cats are curious and independent.";
  } else {
    return "All animals are awesome!";
  }
};
console.log(getAnimalDescription("fox"));
console.log(getAnimalDescription("dog"));
console.log(getAnimalDescription("cat"));
console.log(getAnimalDescription("horse"));
