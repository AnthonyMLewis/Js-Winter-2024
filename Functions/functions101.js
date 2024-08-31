// creating the function first seems to be the key in keeping order.
function addNumbers (numOne,numTwo) // two arguments are being pass.
{
    let total = numOne + numTwo;  // Declaread my variable and its value for the two arguments.
    console.log(total); // Just to show if the code is working correctly
}
// Then call on the function thru out the code.
addNumbers(7,7); //Calling on the function here.

function printName(name)
{
    console.log(`user name is  ${name}`);
}

printName('Anthony');
printName('Mitchel');
printName('Lewis');

// Converting Fahrenheit To Celsius
//To convert Fahrenheit to Celsius, you can use the following formula
//Celsius  = (Fahrenheit - 32) * 5/9 
function convertValues(fahrenheit)
{
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit}F is equal to the readout in ${celsius}C`);
}
convertValues(90);
convertValues(120);