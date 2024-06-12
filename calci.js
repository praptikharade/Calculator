function appendToScreen(value) {
    document.getElementById('screen').innerText += value;
  }

  function calculate() {
    const expression = document.getElementById('screen').innerText;
    const result = eval(expression);
    document.getElementById('screen').innerText = result;
  }

  function clearScreen() {
    document.getElementById('screen').innerText = '';
  }