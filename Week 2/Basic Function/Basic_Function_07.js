/* Create a function named containsWord that:
Takes two parameters, sentence and word.
Returns true if sentence includes word, otherwise false.
Call the function with the sentence "JavaScript is fun!" and the word "fun".
Print the result using console.log().

Bonus: Modify the function to use implicit return. 

*/

const containsWord = (sentence, word) => {
  if (sentence.includes(word)) {
    return true;
  } else {
    return false;
  }
};
console.log(containsWord("JavaScript is fun!", "fun"));
