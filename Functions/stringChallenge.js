//1. Declare a new string variable with name coder and set value to "I am a good programmer".
let coder =`I am a good programmer`
//2. Find out the type of the variable coder.
console.log(typeof coder);
//3. Find out the length of the variable coder.
console.log(coder.length);
//4. Convert to all uppercase.
console.log(coder.toUpperCase());
//5. Convert to all lowercase.
console.log(coder.toLowerCase());
//6. Find out if it includes the word 'good'.
console.log(coder.includes('good'));
//7. Strip out the word 'programmer' from variable.
//coder = coder.split('').reverse().slice(10).reverse().join(' ');
coder = coder.substring(0,11, coder.lastIndexOf(''));
console.log(coder);
//8. Find out if the variable end with the word 'programmer'.
coder = coder =`I am a good programmer`;
console.log(coder.endsWith('programmer'));
//9. Split the variable into two variable at 'good' word.
let firstSlice;
let secondSlice;
firstSlice = coder.slice(7,9);
secondSlice = coder.slice(9,11);
console.log(firstSlice);
console.log(secondSlice);
//10. Link was not working when i selected and paste into browser.