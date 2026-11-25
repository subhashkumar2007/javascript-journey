

// -------------------------------------------* Simple Calculator *----------------------------------------------

let num1 = 55;
let num2 = 5;
let operator = "/"

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break
    case "-":
        console.log(num1 - num2);
        break
    case "*":
        console.log(num1 * num2);
        break
    case "/" :
        if (num2 === 0) {
            console.log("cannot divide by zero");
        } else {
            console.log(num1 / num2);
        }
        break
    case "%":
        console.log(num1 % num2);
        break
    default:
        console.log("invalid operator");
}