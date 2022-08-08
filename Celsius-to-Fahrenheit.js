// Problem-1: Celcius to Fahrenheit Convert

function celciusToFahrenheit(celsius) {
    const getFahrenheit = (celsius * 1.8000);
    const getResult = getFahrenheit + 32;
    return getResult;
}

const myCelsiusValue = 25;
const getResultFahrenheit = celciusToFahrenheit(myCelsiusValue);
console.log("Convert Celsius to Fahrenheit: ", getResultFahrenheit);


