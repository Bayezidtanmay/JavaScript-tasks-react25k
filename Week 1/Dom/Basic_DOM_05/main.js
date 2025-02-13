const btn = document.getElementById("btn");
const input = document.getElementById("input");
const para = document.getElementById("para");

const bgColor = () => {
  para.style.backgroundColor = "red";
  para.style.padding = "50px";
};

btn.addEventListener("click", bgColor);

const inputColor = () => {
  let paraColor = input.value;
  para.style.color = paraColor;
};

input.addEventListener("click", inputColor);
