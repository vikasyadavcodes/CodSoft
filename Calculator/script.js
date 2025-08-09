const historyDisplay = document.querySelector("#history");
const currentDisplay = document.querySelector("#current");
const buttons = document.querySelectorAll("button");

let value = "";
let op = null;
let first = null;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const num = btn.getAttribute("data-val");
    const oper = btn.getAttribute("data-op");

    if (num !== null) {
      value += num;
      currentDisplay.textContent = value;
    } 
    else if (oper !== null) {
      if (value === "") return;
      first = parseFloat(value);
      op = oper;
      historyDisplay.textContent = `${value} ${op}`;
      value = "";
      currentDisplay.textContent = "0";
    } 
    else if (btn.id === "eq") {
      if (value === "" || op === null || first === null) return;
      let second = parseFloat(value);
      let result = 0;

      switch (op) {
        case "+": result = first + second; break;
        case "-": result = first - second; break;
        case "×": result = first * second; break;
        case "÷": result = second !== 0 ? first / second : "Err"; break;
      }

      historyDisplay.textContent = `${first} ${op} ${second} =`;
      currentDisplay.textContent = result;
      value = result.toString();
      first = null;
      op = null;
    } 
    else if (btn.id === "clr") {
      value = "";
      op = null;
      first = null;
      historyDisplay.textContent = "";
      currentDisplay.textContent = "0";
    }
  });
});
