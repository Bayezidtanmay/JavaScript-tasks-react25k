/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
*/

const displayText = document.getElementById("displayText");
const input = document.getElementById("input");

const liveText = () => {
  const inputValue = input.value;
  displayText.textContent = inputValue;
};
input.addEventListener("input", liveText);
