let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;

function clearDisplay() {
  currentDisplay = '';
  document.querySelector('#display').value = currentDisplay;
}

function appendToDisplay(value) {
  currentDisplay += value;
  document.querySelector('#display').value = currentDisplay;
}

function calculateResult() {
  try {
    currentDisplay = eval(currentDisplay).toString();
  } catch (error) {
    currentDisplay = 'Error';
  }
  document.querySelector('#display').value = currentDisplay;
}
