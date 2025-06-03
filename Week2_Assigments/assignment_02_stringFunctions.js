
//Common Function to find the length of the string, last word and its length
let stringFunc= (Variable) => {
     //code to Length to the string
     let lengthOfTheString = Variable.length;
     console.log("The length of the String is "+lengthOfTheString+" and the last word is "+(Variable[lengthOfTheString-1])+"");
 
     //Print the last word for the user Input and find its Length
     let lastWord = Variable[lengthOfTheString-1];
     let lastWordCount = lastWord.length;
     console.log("The length of the last word in the user provided input is "+lastWordCount+"");
     console.log("---------------------------End of Sub Assignment Validation--------------------------------")
     return lastWordCount;
}


/* Assignment 1 :  */
//Function to identify the length of a string and Print the last word 
let arrayOfString;
let stringLength = () => {

    arrayOfString = userInput.split(" ");
    console.log(arrayOfString);

/*  Calling the common function to read the array of value, Identify the total string length
    Finding the last word of the String and its length */
    stringFunc(arrayOfString);
}
let userInput ="Give your best, Whatever it takes"
stringLength(userInput);


/* Assignment 2 :  */
//Function to trim the empty spaces and then identify the length of a string and Print the last word 
let identifyStringLength = () => {

    let trimmedVal = inputVal.trim();
    let splittedString = trimmedVal.split(" ");
    console.log(splittedString);

    /*  Calling the common function to read the array of value, Identify the total string length
    Finding the last word of the String and its length */
    stringFunc(splittedString);
}
let inputVal = "What is happening here        ";
identifyStringLength(inputVal);


/* Assignment 3 :  */
//Function to Sort and Compare the String Values
let anagramValidation = () => {
    let str1 = inputData1.toUpperCase().trim();
    console.log(str1);
    let str2 = inputData2.toUpperCase().trim();
    console.log(str2);

    //Sort the String value
    let sortedStringVal1 = str1.split("").sort().join("");
    let sortedStringVal2 = str2.split("").sort().join("");

    console.log("The Value is String 1 is "+sortedStringVal1+" and the value in String 2 is "+sortedStringVal2+"");
    //Compare the string
    if(sortedStringVal1===sortedStringVal2)
        console.log("Provided input strings are anagram")
    else
        console.log("Provided input strings are not a anagram")
}
let inputData1 = "listen ";
let inputData2 = "Silent"
anagramValidation(inputData1,inputData2);