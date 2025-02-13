const btn = document.getElementById("btn");
const para = document.getElementById("para");

let count = 0;
btn.addEventListener("click", function () {
  count++;
  para.textContent = `Count: ${count}`;
});
