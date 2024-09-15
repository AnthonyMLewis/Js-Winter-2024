//Write a program that is based on a number and displays whether the number is odd or even using an if-else statement.
//let number = 10;

let num = 10;

if(num % 2== 0)
   {
    console.log(num + ' is even');
   }
else
   {
    console.log(num + ' is odd')
   }
// Write a program based on age and displays a message based on their age using an if-else if statement:
// let age = 24;
// If the age is less than 18, display "You are a minor".
// If the age is between 18 and 65 (inclusive), display "You are an adult".
// If the age is greater than 65, display "You are a senior citizen".

let age = 66;

if(age <= 18)
    {
    console.log(`You are a minor`);
} 
else if(age <= 65) 
    {
    console.log(`You are an adult`);
}
else 
    {
    console.log(`You are an senior`);
    }

// Write a program based on a letter and displays whether the letter is a vowel or a consonant using an if-else statement.
// let letter = 'e';

let letter  = 'e';
letter  = letter.toLowerCase();
    if(letter =='a' || letter =='e' || letter =='i' || letter =='o' || letter =='u')
        {
        console.log(`Letter is a vowel`);
    }
    else
        {
        console.log(`Letter is a consonant`)
    }
// Write a program based on given password and displays a message based on the password using an if-else statement:
// let password = 'Test1233';
// If the password is less than 8 characters, display "Password too short".
// If the password contains both letters and numbers, display "Password accepted".
// If the password does not meet either of the above conditions, display "Password rejected".

let password = 'Test1233';

if(password.length.valueOf(8)>= 8){
    console.log(`Your password is too short`)
} else if(userInput === undefined || userInput === null){
    console.log('Please input valid user input'); 
}
else{console.log(`Your password meet standards`);}

