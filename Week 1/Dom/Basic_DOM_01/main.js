const para = document.getElementById("para");
const btn = document.getElementById("btn");

const changePara = () => {
  para.textContent = "Hello, World!";
};

btn.addEventListener("click", changePara);
