/* Create a variable greeting and assign it the value "Hello, World!".
Convert the string to:
Uppercase using .toUpperCase().
Lowercase using .toLowerCase().
Print both results using console.log().
Example output:
"HELLO, WORLD!"
"hello, world!" */

let greeting = "Hello, World!";
let upper = greeting.toUpperCase();
let lower = greeting.toLowerCase();
console.log(upper);
console.log(lower);

const trimText = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();

function cleanText(str) {
  return toLowerCase(trimText(str));
}
console.log(cleanText("    JavaScript!    "));
