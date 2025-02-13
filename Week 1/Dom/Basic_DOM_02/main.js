const input = document.getElementById("input");
const btn = document.getElementById("btn");
const fruitList = document.getElementById("fruitList");

const fruitFunc = () => {
  const fruitAdd = input.value;
  const list = document.createElement("li");
  fruitList.appendChild(list);
  list.textContent = fruitAdd;
  input.value = "";
};

btn.addEventListener("click", fruitFunc);
