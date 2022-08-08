// Problem-2: Fahrenheit to Celsius Convert

function fahrenheitToCelsius(fahrenheit) {
    const getCelsius = (fahrenheit - 32);
    const getResult = getCelsius / 1.8;
    return getResult;
}

const myFahrenheitValue = 77;
const getResultCelsius = fahrenheitToCelsius(myFahrenheitValue);
console.log("Fahrenheit to Celsius Convert: ", getResultCelsius);