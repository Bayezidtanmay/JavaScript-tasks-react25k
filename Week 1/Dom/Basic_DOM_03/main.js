const input = document.getElementById("input");
const text = document.getElementById("text");

const userType = () => {
  text.textContent = input.value;
};
input.addEventListener("input", userType);
