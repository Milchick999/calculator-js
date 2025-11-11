import './styles/main.css';
import { calculate, changingSign, processingPercent } from './js/math';
import initTheme, { displayElement, bgCalculator } from './js/theme';

let currentInput = '0';
let previousSavedInput = '';
let operation = null;
let refreshBeforeNewInput = false;

function updateDisplay() {
  const textToShow = currentInput === '' ? (previousSavedInput || '0') : currentInput;

  if (displayElement) {
    displayElement.textContent = textToShow;
  }

  if (textToShow.length > 12) {
    displayElement.classList.add('smallFontSizeDisplay');
  } else {
    displayElement.classList.remove('smallFontSizeDisplay');
  }
}

function processingNumbers(value) {
  if (refreshBeforeNewInput) {
    currentInput = '0';
    refreshBeforeNewInput = false;
  }

  if (value === '.') {
    if (currentInput.includes('.')) return;

    if (currentInput === '') {
      currentInput = '0.';
      return;
    }
    currentInput += '.';
    return;
  }

  if (currentInput.length >= 15 && value !== '.') {
    return;
  }

  if (value === '0' && currentInput === '0') {
    return;
  }

  if (currentInput === '0') {
    currentInput = value;
  } else {
    currentInput += value;
  }
}

function processingOperator(symbol) {
  if (currentInput === '0' || currentInput === '') {
    operation = symbol;
    return;
  }

  if (operation === 'null' || previousSavedInput === '') {
    previousSavedInput = currentInput;
    operation = symbol;
    currentInput = '';
    return;
  }

  if (operation !== null && previousSavedInput !== '') {
    const result = calculate(previousSavedInput, currentInput, operation);

    previousSavedInput = result.toString();

    operation = symbol;

    currentInput = '';
  }
}

function processingEquals() {
  if (previousSavedInput === '' || operation === null) {
    return;
  }

  const result = calculate(previousSavedInput, currentInput, operation);

  if (result === 'Error') {
    currentInput = 'Error';
  } else {
    currentInput = result.toString();
  }

  previousSavedInput = '';
  operation = null;
  refreshBeforeNewInput = true;
}

function processingClear() {
  currentInput = '0';
  previousSavedInput = '';
  operation = null;
}

if (bgCalculator) {
  bgCalculator.addEventListener('click', (event) => {
    const { target } = event;

    if (target.classList.contains('number')) {
      processingNumbers(target.textContent);
    }

    if (target.classList.contains('operation')) {
      processingOperator(target.textContent);
    }

    if (target.classList.contains('equals')) {
      processingEquals();
    }

    if (target.classList.contains('clear')) {
      processingClear();
    }

    if (target.classList.contains('sign')) {
      currentInput = changingSign(currentInput);
    }

    if (target.classList.contains('percent')) {
      currentInput = processingPercent(currentInput);
    }

    updateDisplay();
  });
}

initTheme();
