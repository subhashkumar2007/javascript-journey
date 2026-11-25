

// ---------------------------* Largest Of Three Numbers *--------------------------------


let a = 255;
let b = 255;
let c = 250;

// let a = Number(prompt("Enter first number:"));
// let b = Number(prompt("Enter second number:"));
// let c = Number(prompt("Enter third number:"));


if (a >= b && a >= c) {
    console.log(a + " is the largest");
} else if (b >= a && b >= c) {
    console.log(b + " is the largest");
} else {
    console.log(c + " is the largest");
}

