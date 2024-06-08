// Problem 01: Make a function that convert temperature from celcius (°C) to fahrenheit (°F) and from fahrenheit (°F) to celcius (°C).
// Fahrenheit = (Celcius * 9/5) + 32
// Celcius = (fahrenheit - 32) * 5/9

function celciusToFahrenheit(temperature) {
  return `${(temperature * 9) / 5 + 32}°F`;
};

function fahrenheitToCelcius(temperature) {
  return `${(temperature - 32) * 5/9}°C`;
};

console.log(celciusToFahrenheit(-5))
console.log(fahrenheitToCelcius(86))
