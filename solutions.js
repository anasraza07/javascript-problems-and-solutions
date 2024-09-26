/*
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
Problem 2.1: Add localStorage to the calculator project. Whenever we update the calculation, save it using .setItem() When the page is loaded, get the calculation using .getItem() Use a default value of if a calculation doesn't exist in local storage
// solution => 'calculator/'

// Problem 03: Imagine an amusement park that has a discount for children (5 years and younger) or seniors (65 years and older). If the person qualifies for discount  display 'Discout' in console otherwise display 'No Discount' in console. Discount is only available if it is not holiday, in order to get discount people must meet the age requirement and it is also not a holiday.
const age = 32;
const holiday = false;

if ((age <= 5 || age >= 65) && !holiday) {
  console.log('Discount');
} else {
  console.log('No Discount');
}

// Problem 04: A coin-flip game
4.1: We'll improve the coin flip game. Create 2 buttons to play the game heads tails
When clicking 'heads' play the game with guess = 'heads'. When clicking 'tails' play the game with guess = 'tails'. Create a function 'playGame(guess)' to reuse the code.
4.2: Create a score object { wins: 0, losses: 0 }, update the score each time after playing, and display the score in the console.
4.3: Use localStorage to save and load the score (hint: you'll need to use JSON.stringify() to convert the score object to a string).
// solution => 'coin-flip-game/'

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

// Problem 06: Create a function convertLength(length, from, to) that takes a number and a unit ('km', 'miles', 'feet') and converts the length to another unit ('km', miles', 'feet'). Note: 1 mile = 1.6 km, 1 km = 3281 ft, 1 mile = 5280 ft (approximately).
// - convertLength(50, 'miles', 'km') => '80 km'
// - convertLength(32, 'km', 'miles') => '20 miles' 
// - convertLength(50, 'km', 'km') => '50 km'
// Problem 6.1: Update convertLength to support converting between feet also.
// - convertLength(5, 'miles', 'km') => '8 km'
// - convertLength(5, 'miles', 'ft') => '26400 ft'
// - convertLength(5, 'km', 'ft') => '16405 ft'
// Problem 6.2: Update convertLength so that if you give it an invalid unit, it will return `Invalid unit: ${unit}`.
// - convertLength(5, 'Ibs', 'Ibs') => 'Invalid unit: Ibs'
function convertLength(length, from, to) {
  let result;
  if (from !== 'km' && from !== 'miles' && from !== 'ft') {
    return `Invalid unit: ${from}`;
  } else if (to !== 'km' && to !== 'miles' && to !== 'ft') {
    return `Invalid unit: ${to}`;
  }

  if (from === 'km' && to === 'miles') {
    result = length / 1.6;
  } else if (from === 'km' && to === 'ft') {
    result = length * 3281;
  }

  else if (from === 'miles' && to === 'km') {
    result = length * 1.6;
  } else if (from === 'miles' && to === 'ft') {
    result = length * 5280;
  }

  else if (from === 'ft' && to === 'km') {
    result = length / 3281;
  } else if (from === 'ft' && to === 'miles') {
    result = length / 5280;
  }

  else if (from === to) {
    result = length;
  }

  return `${result} ${to}`;
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(5, 'miles', 'ft'))
console.log(convertLength(50, 'km', 'km'));
console.log(convertLength(5, 'km', 'ft'))
console.log(convertLength(5, 'Ibs', 'Ibs'))

// Problem 7.1: Let's say in the Amazon project, we have a basketball product. This product has a name of 'basketball', a price of 2095 cents. Create an object to represent this product and display it in the console.
// Problem 7.2: let's say we want to increase the price by 500 cents. Use dot notation to increase the price, and display the updated object in the console.
// Problem 7.3: Using bracket notation, add a property 'delivery-time' to the object with the value '3 days'. Display the updated object in the console. 
const product = {
  name: 'basketball',
  priceCents: 2095
}

product.priceCents += 500;
product['delivery-time'] = '3 days';
console.log(product);

// Problem 08: Create a function 'comparePrice(product1, product2)', which takes 2 products (with 'name' and 'price' properties) and returns the product that is less expensive. Create 2 products and try out the function.
function comparePrice(product1, product2) {
  if (product1.priceCents < product2.priceCents) {
    return product1;
  } else {
    return product2;
  }
};
const product2 = {
  name: 'hockey',
  priceCents: 3000
}
console.log(comparePrice(product, product2));

// Problem 09: Create a function ‘isSameProduct(product1, product2)', which returns true if 2 products have the same values inside ('name' and 'price'). If not, return false. Create 2 products and try out the function. (Hint: objects are references so you can't compare them directly).
function isSameProduct(product1, product2) {
  return product1.name === product2.name && product1.price === product2.price;
};
const productOne = {
  name: 'Raza',
  price: 300,
};
const productTwo = {
  name: 'Raza',
  price: 300,
};
console.log(isSameProduct(productOne, productTwo));
*/