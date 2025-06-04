function appendValue(val) {
      document.getElementById('display').value += val;
    }

    function calculate() {
      const input = document.getElementById('display').value;
      try {
        document.getElementById('display').value = eval(input);
      } catch {
        document.getElementById('display').value = 'Error';
      }
    }

    function clearDisplay() {
      document.getElementById('display').value = '';
    }

    function deleteLast() {
      const display = document.getElementById('display');
      display.value = display.value.slice(0, -1);
    }

    function toggleTheme() {
      document.body.classList.toggle('dark-mode');
    }
