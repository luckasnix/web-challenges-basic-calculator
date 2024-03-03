const operationsMap = {
  addition: (firstNumber, secondNumber) => firstNumber + secondNumber,
  subtraction: (firstNumber, secondNumber) => firstNumber - secondNumber,
  multiplication: (firstNumber, secondNumber) => firstNumber * secondNumber,
  division: (firstNumber, secondNumber) => firstNumber / secondNumber,
};

const calculate = (firstNumber, secondNumber, operation) =>
  operationsMap[operation](firstNumber, secondNumber);

const calculatorForm = document.querySelector('#calculator-form');
const calculatorSubmitButton = document.querySelector('button[type="submit"]');
const resultOutput = document.querySelector('output[name="result"]');

calculatorSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const calculatorFormData = new FormData(calculatorForm);
  const firstNumber = Number(calculatorFormData.get('calculator-first-number'));
  const secondNumber = Number(calculatorFormData.get('calculator-second-number'));
  const operation = calculatorFormData.get('calculator-operation');
  const result = calculate(firstNumber, secondNumber, operation);
  resultOutput.textContent = `O resultado é: ${result}`;
});
