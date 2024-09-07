let planets = ['  Mercury ', 'Venus ', 'Earth ', 'Mars ', 'Jupiter ', 'Saturn ', 'Neptune ', 'Uranus '];
console.log(planets.length);

// Find the element at local 0
console.log(`  This is how you display a item in your array ` +planets[0]);

// Storing the index value
let valueAtIndex = planets[0];
console.log(typeof planets);
console.log(`  This is how to store a certain file in the array ` +valueAtIndex);
console.log (valueAtIndex.length);

// Convert array into string function: toString();
let planetString = planets.toString();
console.log(`  This is how you print the array out to view it `+planetString);
console.log(typeof planetString);
console.log(planetString.length);

// Use to join array values function: join();
let planetJoinString = planets.join(' - ');
console.log(`  Join can be use to change string seperators to what you choose `+planetJoinString);
console.log(planetJoinString.length);

// Use to remove the last element in the array function: pop(); 
let removeElement = planets.pop();
console.log(`  This is to remove the last elemet from the string `+removeElement);
console.log(removeElement.length);

// Use to remove first element in the array function: shift(); 
let shiftElement = planets.shift();
console.log(`  This is to remove the first elemet from the string `+shiftElement);
console.log(removeElement.length);

// Use to add new value in the end of new array function: push(); overwrites the last entry
let pushElement = planets.push('MitchelPlanet');
console.log(pushElement);
console.log(planets)

// Add new value to the beginning of array function: unshift(); overwrites the first entry
let notShiftElement = planets.unshift('NewInsert');
console.log(notShiftElement);
console.log(planets);

// To add/remove values in the array function: splice(); select index 5 and dont remove any index 0, then add new index
let spliceElement = planets.splice(5,0,'D','R','U');
console.log(spliceElement);
console.log(planets);

// To concat multiple arrays. function: concat();
let planets1 = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Uranus'];
let fruit = ['Apples', 'Pears', 'Lemons', 'Grapes'];
let toys = ['Bike', 'Planes', 'Tanks', 'Cars', 'Track'];
 
let combineArrays = planets1.concat(fruit, toys);
console.log(`All array will appear here  `+ planets1 + ' - ' + fruit + ' - ' + toys);
console.log(combineArrays);

// Using concat to add values to arrays function: concat();
let addedFruit = fruit.concat('Pinapple','Strawberries');
console.log(addedFruit);

// How to include a name when searching elements in an array function: includes();
let includingEarth = planets1.includes('Earth');
console.log(includingEarth);

let includingMars = planets1.includes('Mars');
console.log(includingMars);

// to find the FIRST OCCURRENCE of a given value at any index in the array function: indexOf();
let indexOfEarth = planets1.indexOf('Earth');
console.log(indexOfEarth);

// to find the LAST OCCURRENCE of a given value at any index in the array function: lastIndexOf();
let lastIndexOfEarth = planets1.lastIndexOf('Earth');
console.log(lastIndexOfEarth);

// to find if the given value (or value in a variable) is array or not. function: isArray();
let isPlanetArray = Array.isArray(planets1);
console.log(isPlanetArray);

// to reverse an array function: reverse();
planets1.reverse();
console.log(planets1);

// finding out if the varible is an array data type
console.log(Array.isArray(planets));
console.log(Array.isArray(planets1));