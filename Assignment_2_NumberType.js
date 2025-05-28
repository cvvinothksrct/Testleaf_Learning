
//Nested If else function for finding out whether the given number is 0, positive or Negative

let number;
let NumberType = (number) => {

    if(number<0)
        console.log("The Given number is Negative")
    else if (number>0)
        console.log("The Given number is positive")
    else 
    console.log("The Given number is 0")
}

NumberType(-1);