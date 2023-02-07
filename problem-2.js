/* Problem 1: Let’s play a mind game

Function explanation: "mindGame" is a function that applies  Basic Arithmetic Operations on a number.that takes a number as input, multiplies that number by 3, adds the product to 10, divide the sum by 2, subtracts 5 from the quotient, and return the subtraction.*/

function mindGame(inputNumber){
    if(typeof inputNumber === 'number' && inputNumber >= 0){
        return (((inputNumber * 3) + 10 ) / 2) - 5 ;
    }
    else{
        return "Please input Positive Number only"
    }
};



/* Problem 2: Finding even or odd

Function explanation: "evenOdd" is a function by which string is marked as even and odd.  validating a string as input with input type "String", using if condition to check if string length is divisible by 2. If true will return even and false will return odd  */

function evenOdd(findString){
    if(typeof findString === 'string'){
        const countCharacter = findString.length;
        if(countCharacter%2 === 0){
            return 'even';
        }
        else{
            return 'odd';
        }
    }
    else{
        return 'Your input must be string'
    }
}



/* Problem 3: Is Less or Greater than seven

Function explanation: "isLGSeven()" is a function by which numbers are compared. In this function, if the input number and the subtraction of 7 is less than 7, then it must return, otherwise the input must be multiplied by 2 and returned. */

function isLGSeven(number) {
    if (typeof number === 'number') {
        const subtractionOfNumber = (number - 7);
        if(subtractionOfNumber < 7) {
            return subtractionOfNumber;
        }
        else {
            return number * 2;
        }
    }
    else{
        return 'Your input must be Number'
    }
}



/*Problem 4: Finding Bad data

Function explanation: function called "findingBadData()" Using if condition checks if the input type is 'array' and runs the for loop to check if each array element is less than zero(0) using if condition. If less than zero, those numbers are kept in new array and new array length is returned*/

function findingBadData(arrayOfAge){
    if(Array.isArray(arrayOfAge) === true){
        const badArray = []
        for(i=0; i<arrayOfAge.length; i++){
            if(arrayOfAge[i] <= 0 && typeof arrayOfAge[i] === 'number'){
                badArray.push(arrayOfAge[i])
            }
            else if( arrayOfAge[i] >= 0 && typeof arrayOfAge[i] ==='number'){
                
            }
            else{
                return "All array elements must be numbers"
            }
        }
        return badArray.length
    }
    else{
        return 'Your input must be an Array'
    }
}



/* Problem 5: Convert your gems into diamond 

Function explanation: "gemsToDiamond()" is a function to convert three friends' Gems to Diamonds. If the sum total of Diamonds of three friends is greater than 2000 then return the subtraction otherwise return the sum.*/


function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
    if (typeof firstFriend === 'number' && typeof secondFriend === 'number' && typeof thirdFriend === 'number') {
        const firstFriendDiamond = firstFriend * 21;
        const secondFriendDiamond = secondFriend * 32;
        const thirdFriendDiamond = thirdFriend * 43;
        const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
        if (totalDiamond >= (1000 * 2)) {
            return totalDiamond - 2000;
        }
        else {
            return totalDiamond
        }
    }
    else {
        return 'Your input must be Number'
    }
}



