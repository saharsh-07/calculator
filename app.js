const dark = document.querySelector("#dark");
dark.addEventListener("click", () => {
  const h1 = document.querySelector("h1");
  h1.classList.toggle("dark");
  const body = document.body;
  body.classList.toggle("dark");
  const output = document.querySelector(".output");
  const container = document.querySelector(".container");
  container.classList.toggle("dark");
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.toggle("dark"))
  output.classList.toggle("dark");
});
