export function calculate(firstNumber, secondNumber, operation) {
  const first = parseFloat(firstNumber);
  const second = parseFloat(secondNumber);

  if (Number.isNaN(first) || Number.isNaN(second)) {
    return NaN;
  }

  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    case '/':
      if (second === 0) {
        return 'Error';
      }
      return first / second;
    default:
      return second;
  }
}

export function changingSign(currentValue) {
  if (currentValue === '0' || currentValue === '' || currentValue === 'Error') {
    return currentValue;
  }
  return (parseFloat(currentValue) * -1).toString();
}

export function processingPercent(currentValue) {
  if (currentValue === '0' || currentValue === '' || currentValue === 'Error') {
    return currentValue;
  }
  return (parseFloat(currentValue) / 100).toString();
}
