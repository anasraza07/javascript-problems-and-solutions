// Problem 01: Make a function that convert temperature from celcius (°C) to fahrenheit (°F) and from fahrenheit (°F) to celcius (°C).
// Fahrenheit = (Celcius * 9/5) + 32
// Celcius = (fahrenheit - 32) * 5/9
function convertToFahrenheit(celsius) {
  return `${(celsius * 9) / 5 + 32}°F`;
};

function convertToCelcius(fahrenheit) {
  return `${(fahrenheit - 32) * 5 / 9}°C`;
};

console.log(convertToFahrenheit(-5))
console.log(convertToCelcius(86))

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

// Problem 04: A coin-flip game
const randomNumber = Math.random();
let result;

if (randomNumber > 0.5) {
  result = 'heads';
} else {
  result = 'tails';
}

const guess = 'heads';
if (guess === result) {
  console.log('You win!');
} else {
  console.log('You lose!')
}

// Problem 05: Create a function 'convertTemperature(degrees, unit)' that takes a number and a unit ('C' or 'F'), and converts it into the other unit. convertTemperature (25, 'C') => '77F' convertTemperature (86, 'F') => '30C'
function convertTemperature(degrees, unit) {
  if (unit === 'F') {
    return convertToCelcius(degrees);
  } else {
    return convertToFahrenheit(degrees);
  }
};
console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));

// Problem 06: Create a function convertLength(length, from, to) that takes a number and a unit ('km' or 'miles') and converts the length to another unit ('km' or 'miles'). Note: 1 mile = 1.6 km (approximately).
// - convertLength(50, 'miles', 'km') => '80 km'
// - convertLength(32, 'km', 'miles') => '20 miles' 
// - convertLength(50, 'km', 'km') => '50 km'
function convertLength(length, from, to) {
  let result;
  if (from === 'km' && to === 'miles') {
    result = length / 1.6
  } else if (from === 'miles' && to === 'km') {
    result = length * 1.6
  } else if (from === to) {
    result = length
  } else {
    return 'Invalid Values';
  }

  return `${result} ${to}`;
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));