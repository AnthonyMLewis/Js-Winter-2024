//1. Equal to == converts values to same data type first
let num0 = 5;
let num1 = '5';
console.log(num0 == num1);

//2. Not Equal to !=
let num2 = 5;
let num3 = 4;
console.log(num2 != num3);

//3. strict Equal to === doesnt convert values to the same data type
let num5 = 5;
let num6 = 5;
console.log(num5 === num6);

//4. strict not Equal to !==
let num7 = 5;
let num8 = 5;
console.log(num7 !== num8);

//5. Less than <
let num9 = 10;
let num10 = 12;
console.log(num9 < num10);

//6. Greater than >
let num11 = 10;
let num12 = 12;
console.log(num11 > num12);

//7. Greater than or equal to >=
let num13 = 15;
let num14 = 15;
console.log(num13 >= num14);

//8. Less than or equal to <=
let num15 = 20;
let num16 = 21;
console.log(num15 <= num16);

//9. Logical operator And (&&) two conditions
let productPrice = 10;
let amountInWallet = 30;
let isProductAvailble = false;
if(amountInWallet >= productPrice && isProductAvailble === true)  // two conditions
    {
      console.log("You can purchase the product");
    }
    else
    {
        console.log("You can not purchase this product");
    }

//10. Logical Operator OR (||) two conditions
let increseInPrice = 50;
let decreseInBudget =70;
let productionCost =100;
if(increseInPrice >= decreseInBudget || increseInPrice <= productionCost) // two conditions 
{
    console.log("Price was in the ballpark of savings");
}
else
{
    console.log("We dont have any money to spend");
}
//11. Logical Operator NOT (!) two conditions
let managePrices  = 275;
let investGain = 145;
let grossEnter = 385;
if(!(managePrices <= investGain) || grossEnter >= investGain)
{
    console.log("We winning Now")
}
else 
{
    console.log("We losing Now")
}

let isUserLogIn = true;
let userLoggedOut = !isUserLogIn; 
console.log(userLoggedOut);

//12. Conditional Operator (?:) two conditions after question mark in string  format with a (:) sperating the statements
let taxPaid = 1247;
let inceaseEarned = 750;
let result = (taxPaid >= inceaseEarned)?" Your Tax paided was higher than your incease earned" : "Your Winning";
console.log(result);

let age = 21;
let isAdult = age >= 21 ? true : false;
console.log(isAdult);