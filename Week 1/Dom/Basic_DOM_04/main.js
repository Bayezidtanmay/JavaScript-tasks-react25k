const para = document.getElementById("para");
const btn = document.getElementById("btn");

const paraVisibility = () => {
  if (para.textContent) {
    para.textContent = "";
  } else {
    para.textContent = "This is a para";
  }
};

btn.addEventListener("click", paraVisibility);
