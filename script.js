document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const numbers = document.querySelectorAll(".number");
  const operators = document.querySelectorAll(".operator");
  const clearBtn = document.getElementById("clear");
  const equalBtn = document.getElementById("equal");

  numbers.forEach(number => {
    number.addEventListener("click", () => {
      display.value += number.textContent;
    });
  });

  operators.forEach(operator => {
    operator.addEventListener("click", () => {
      display.value += operator.textContent;
    });
  });

  clearBtn.addEventListener("click", () => {
    display.value = "";
  });

  equalBtn.addEventListener("click", () => {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Invalid expression";
    }
  });
});
