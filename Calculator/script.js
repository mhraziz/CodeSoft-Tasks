const display = document.getElementById('display');
    let expression = '';

    function appendValue(value) {
        if (value === '=') {
            display.value = eval(expression);
            expression = display.value;
        } else {
            expression += value;
            display.value = expression;
        }
    }

    function clearDisplay() {
        expression = '';
        display.value = '';
    }