// Problem 01: Make a function that convert temperature from celcius (°C) to fahrenheit (°F) and from fahrenheit (°F) to celcius (°C).
// Fahrenheit = (Celcius * 9/5) + 32
// Celcius = (fahrenheit - 32) * 5/9
function celciusToFahrenheit(temperature) {
  return `${(temperature * 9) / 5 + 32}°F`;
};

function fahrenheitToCelcius(temperature) {
  return `${(temperature - 32) * 5 / 9}°C`;
};

console.log(celciusToFahrenheit(-5))
console.log(fahrenheitToCelcius(86))

// Problem 02: Make a calculator
// 'calculator/'

// Problem 03: Imagine an amusement park that has a discount for children (5 years and younger) or seniors (65 years and older). If the person qualifies for discount  display 'Discout' in console otherwise display 'No Discount' in console. Discount is only available if it is not holiday, in order to get discount people must meet the age requirement and it is also not a holiday.
const age = 32;
const holiday = false;

if ((age <= 5 || age >= 65) && !holiday) {
  console.log('Discount');
} else {
  console.log('No Discount');
}