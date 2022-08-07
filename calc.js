let calcDisplay = document.getElementById('calc-display');
let buttons = document.querySelectorAll('button');
let displayvalue = '';

for (item of buttons) {
    item.addEventListener('click', (c) => {
        buttonText = c.target.textContent;
        if (buttonText == 'X') {
            buttonText = '*';
            displayvalue += buttonText;
            calcDisplay.value = displayvalue;
        }
        else if (buttonText == 'C') {
            displayvalue='';
            calcDisplay.value=displayvalue;

        }
        else if (buttonText == '=') {
            calcDisplay.value = eval(displayvalue);

        }
        else{
            displayvalue += buttonText;
            calcDisplay.value = displayvalue;
        }
       
    })

}