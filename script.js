// This code adds an event listener to the "DOMContentLoaded" event, which is fired when the initial HTML document is completely loaded and parsed.
document.addEventListener("DOMContentLoaded", () => {
  
  // This line selects the HTML element with the id "display" and assigns it to the variable "display".
  const display = document.getElementById("display");
  
  // This line selects all HTML elements with the class "number" and assigns them to the "numbers" NodeList.
  const numbers = document.querySelectorAll(".number");
  
  // This line selects all HTML elements with the class "operator" and assigns them to the "operators" NodeList.
  const operators = document.querySelectorAll(".operator");
  
  // This line selects the HTML element with the id "clear" and assigns it to the "clearBtn" variable.
  const clearBtn = document.getElementById("clear");
  
  // This line selects the HTML element with the id "equal" and assigns it to the "equalBtn" variable.
  const equalBtn = document.getElementById("equal");
  
  // This block of code adds a click event listener to each HTML element in the "numbers" NodeList.
  numbers.forEach(number => {
    number.addEventListener("click", () => {
      // When a number button is clicked, the text content of the button is appended to the value of the "display" element.
      display.value += number.textContent;
    });
  });
  
  // This block of code adds a click event listener to each HTML element in the "operators" NodeList.
  operators.forEach(operator => {
    operator.addEventListener("click", () => {
      // When an operator button is clicked, the text content of the button is appended to the value of the "display" element.
      display.value += operator.textContent;
    });
  });
  
  // This block of code adds a click event listener to the "clear" button.
  clearBtn.addEventListener("click", () => {
    // When the clear button is clicked, set the display value to an empty string
    display.value = "";
  });
  
  // This block of code adds a click event listener to the "equal" button.
  equalBtn.addEventListener("click", () => {
    try {
      // Use eval() to calculate the result of the expression in the display
      // Note: While eval() is used here for simplicity, it's generally not recommended for production due to security risks
      display.value = eval(display.value);
    } catch (error) {
      // If there's an error in calculation, display "Error"
      display.value = "Error";
    }
  });
});
