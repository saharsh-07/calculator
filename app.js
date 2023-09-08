//Dark Mode 
const dark = document.getElementById("dark");
dark.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("dark");
  const h1 = document.querySelector("h1");
  const container = document.querySelector(".container");
  const output = document.querySelector(".output");
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.toggle("dark"))
  output.classList.toggle("dark");
  container.classList.toggle("dark");
  h1.classList.toggle("dark");
  {
  if (dark.textContent === "Dark Mode"){
    dark.textContent = "Light Mode"
  }
  else{
    dark.textContent = "Dark Mode";
  }}
});


//global declarations
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const delBtn = document.querySelector("[data-del]");
const acBtn = document.querySelector("[data-ac]");
const prevOutput = document.querySelector("[data-prev-output]");
const curOutput = document.querySelector("[data-cur-output]");
const equalBtn = document.querySelector("[data-equal]");
