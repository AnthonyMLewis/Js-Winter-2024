let age = 18;
// build a program to tell user if they are eligable to vote
if(age >= 18)
    {
        // if the condition is true, all the code in this block will be executed.
        console.log('You are eligable to vote');
    }
    else
    {
        console.log('You are not eligable to vote');
    }

// Check to see if an number is even or odd.
let num = 10;

if(num % 2== 0)
   {
    console.log(num + ' is even');
   }
else
   {
    console.log(num + ' is odd')
   }
// How to validate user input
let userInput = 'foo123';

if(userInput === undefined || userInput === null)
    {
    console.log('Please input valid user input');
    }
else{
    console.log('Thank you for submitting the form');
}

// Grade Calculator
let grade = 22;

if(grade >= 90)
    {
    console.log('You have an A');
}
else if(grade >= 80 || grade === 89)
    {
    console.log('You have a B');
}
else if(grade >= 70 || grade === 79)
    {
    console.log('You have a C');
}
else if(grade >= 60 || grade === 69)
    {
    console.log('You have a D');
}
else{
    console.log('You Fail');
}