

// -----------------------------------------* Mwnu-Based Calculator *--------------------------------------------------------------------

let num1 = 249;
let num2 = 50;
let choice = 4;

switch(choice) {
    case 1:
        console.log("addition:-> ", num1 + num2);
        break
    case 2:
        console.log("substraction:-> ", num1 - num2);
        break
    case 3:
        console.log("multiplication:-> ", num1 * num2);
        break
    case 4:
        if(num2 === 0) {
            console.log("cannot divide by zero");
        }else {
            console.log("division:-> ", num1 / num2);
        }

        break;
    case 5:
        console.log("remainder:-> ", num1 % num2);
        break
    default:
        console.log("invalid choice");
}

