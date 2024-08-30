// Arithmetic
//1. Write a program that declares two variables num1 and num2, assigns them number values,
//and then calculates and print the product of num1 and num2.
let num1 = 20;
let num2 = 45;
let product = num1 * num2;
console.log('The product of the two numbers are:  ' + product);

//2. WWrite a program that declares a variable radius and assigns it a number value representing the raduis of a circle.
// Then, use the exponentiation operator to calculate the area of the circle
let raduis = 3;
let pi = 3.14;
let area = pi * raduis ** 2;
console.log('The area of the circle is: ' + area);

// Assignment Operator
//1. Write a program that declares a variable count and assigns it an initial value of 5. 
// Then use the addition assignment operator to add 2 to count.
// Print the resulting value of count to the console.
let count = 5;
count++;
count++;
console.log('The count increased by two: ' + count);

//2. Write a program that declares two variables age1 and age2, assigns it an initial value of 10. 
// Then, use the multiplication assignment operators to multiply price by 2.5. 
// Print the resulting value of the price
let newPrice = 10;
let saleTax = 2.5;
let productOf = newPrice * saleTax;
console.log('The product of the value is: ' + productOf);

//Comparison Operator
//1. Write a program that declares two variables age1 and age2, 
// assigns them number values representing the age of different people,
// and then uses the greater than operator to determine if age1 is greater than age2. 
// Print the resulting boolean value to the console.
let age1 = 32;
let age2 = 18;
if(age1 >= age2)
{
    console.log('Is Greater than 18');
}
//2. Write a program that declares a variable num and assigns it a number value. 
// Then, use the logical NOT operator to determine if num is not equal to 0.
// Print the resulting boolean value to the console.
let newNum = 12;
let newNum2 = 0;

if(!(newNum <= newNum2))
{
    console.log("Not equal to zero");
}
//Conditional (Ternary) Operator
//1. Write a program that declares a variable age and assigns it a number value representing a person's age. 
// Then, use the conditional operator to determine if the person is old enough to vote.
// If the person is old enough, print the string "You are old enough to vote" to the console.
// Otherwise, print the string "You are not old enough to vote" to the console.
let personAge = 43;
let ageRestrict = personAge >= 21 ?'You are weclome to come in!' : 'You are not allow in due to your age!';
console.log(ageRestrict)

//2. Write a program that declares a variable price and assigns it a number value representing the price of a product. 
// Then, use the conditional operator to determine if the product is on sale. 
// If the product is on sale, print the string "The product is on sale" to the console. 
// Otherwise, print the string "The product is not on sale" to the console.
let priceOfProduct = 119.99;
let salePrice = priceOfProduct/2;
let sale = true;
let outcome = (priceOfProduct >= salePrice && sale === true) ?"The product is on sale" : "The product is not on sale";
console.log(outcome);