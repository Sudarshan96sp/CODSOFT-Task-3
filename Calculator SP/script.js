document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector('.show-bar');

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }

    const buttons = document.querySelectorAll('.calculator button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            if (buttonText === 'C') {
                clearDisplay();
            } else if (buttonText === '=') {
                calculate();
            } else {
                appendToDisplay(buttonText);
            }
        });
    });
});