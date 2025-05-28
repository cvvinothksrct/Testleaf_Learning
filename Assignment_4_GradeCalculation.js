
//Function for Grade Calculation
let mark;
let GradeCalc = (mark) => {

    switch (true) {
        case mark>=90 && mark<=100:
            console.log("Grade A")
            break;
        case mark>=70 && mark<90:
            console.log("Grade B")
            break;
        case mark>=50 && mark<70:
                console.log("Grade C")
                break;
        default:
            console.log("No Grade Granted")
            break;
    }
}

GradeCalc(56);
