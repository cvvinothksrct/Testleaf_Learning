/* Function to get a string value 
reverse the string and compare the original and reversed string are palindrome  */

let stringFunc = () => {

    //Code to get the original String value, reverse it and store it into a new variable
    reversedStringVal = originalStringVal.split('').reverse().join('');
    console.log(reversedStringVal);

    //Now compare the original and reversed string values
    if (originalStringVal===reversedStringVal) {
        console.log("The Input String value is a 'Palindrome'");
        return true;
    } else
        console.log("The Input String value is not a 'Palindrome'");
        return false;
}

let originalStringVal ="mommy";
let reversedStringVal;
stringFunc(originalStringVal);

