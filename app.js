//global declarations
const dark = document.getElementById("dark");
const body = document.body;
const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const output = document.querySelector(".output");
const buttons = document.querySelectorAll("button");
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const delBtn = document.querySelector("[data-del]");
const acBtn = document.querySelector("[data-ac]");
const prevOutput = document.querySelector("[data-prev-output]");
const curOutput = document.querySelector("[data-cur-output]");
const equalBtn = document.querySelector("[data-equal]");
const error = document.querySelector("#error");

//global var
let curNum = "";
let prevNum = "";
let operator = "";
let hasDecimal = 0;

//Dark Mode
dark.addEventListener("click", () => {
  body.classList.toggle("dark");
  buttons.forEach((btn) => btn.classList.toggle("dark"));
  output.classList.toggle("dark");
  container.classList.toggle("dark");
  h1.classList.toggle("dark");
  {
    if (dark.textContent === "Dark Mode") {
      dark.textContent = "Light Mode";
    } else {
      dark.textContent = "Dark Mode";
    }
  }
});

numberBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => handleNumber(e.target.textContent))
);
operatorBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (curNum !== "") {
      handleOperator(e.target.textContent);
    }
  })
);
acBtn.addEventListener("click", () => clearAll());

delBtn.addEventListener("click", () => delDigit());

equalBtn.addEventListener("click", () => {
  if (prevNum !== "" && curNum !== "") {
    calculate();
  }
});

const handleNumber = (num) => {
  if (hasDecimal === 1 && num === ".") {
    return;
  }
  if (num === ".") {
    hasDecimal++;
  }
  if (hasDecimal < 2) {
    curNum += num;
    if (curNum.length <= 12) {
      curOutput.textContent = curNum;
    }
  }
};

const handleOperator = (op) => {
  if (operator === "") {
    operator = op;
    prevNum = curNum;
    prevOutput.textContent = prevNum + " " + operator;
    curNum = "";
    curOutput.textContent = curNum;
    hasDecimal = 0;
  } else {
    res = calculate();
    operator = op;
    prevNum = curNum;
    prevOutput.textContent = res + " " + operator;
    curNum = "";
    curOutput.textContent = curNum;
    hasDecimal = 0;
  }
};

const showError = () => {
  error.classList.toggle("hidden");
  error.textContent = "Error";
  setTimeout(() => {
    error.classList.add("hidden");
    clearAll();
  }, 2000);
};

const delDigit = () => {
  curNum = curNum.toString().slice(0, -1);
  curOutput.textContent = curNum;
};

const clearAll = () => {
  prevNum = "";
  curNum = "";
  prevOutput.textContent = "";
  curOutput.textContent = "";
};

const calculate = () => {
  let num1 = Number(prevNum);
  let num2 = Number(curNum);
  let res;
  if (operator !== "") {
    if (operator === "+") {
      res = num1 + num2;
    } else if (operator === "➗") {
      if (curNum == 0) {
        showError();
        res = "";
      } else {
        res = num1 / num2;
      }
    } else if (operator === "-") {
      res = num1 - num2;
    } else if (operator === "x") {
      res = num1 * num2;
    }
    curNum = res;
    prevOutput.textContent = `${num1} ${operator} ${num2}`;
    curOutput.textContent = res;
    operator = "";
    return res;
  }
};
