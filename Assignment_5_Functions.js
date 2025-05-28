
//Function declaration
let name = "Vino";
function userProfile(name){
    console.log("Hello "+name);
}
userProfile(name);

//Arrow Function
let double = (number) =>{
//Multiple the number by 2, to get double its value
   let doubleval = number*2;
   console.log(doubleval);
}
double(3);

//Anonymous Function
setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//Callback Function
function getUserData(callback) {
    setTimeout(() => {
        const user = { name: "Vino", age: 25 };
        callback(user);
    }, 3000);
}

getUserData((user) => {
    console.log(`User's name is ${user.name} and age is ${user.age}`);
});

