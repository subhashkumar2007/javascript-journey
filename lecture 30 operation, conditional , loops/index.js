// console.log("hello bachoo")

//----*----> Arithmetic operators <------*------

// let num1 = 2;
// let num2 = 4;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num2 / num1);
// console.log(num2 % num1);
// console.log(num1 ** num2);

//-----*---- incremeant and decremeant-----*-----

// let num = 45;
// num++;
// ++num;
// console.log(num);
// console.log(++num); // 46 -> per increment
// console.log(num++);
// console.log(num);


// console.log(--num);
// console.log(num--);
// console.log(num);

// let num = 2;
// // num++;
// num += 5;
// console.log(num);
// num -= 5;
// console.log(num);
// num *= 5;
// console.log(num);
// num /= 5;
// console.log(num);
// num %= 5;
// console.log(num);
// num **= 5;
// console.log(num);

// --------* comparesion opperator *------


// const num1 = 3;
// const num2 = 6;

// console.log(3 > 6)
// console.log(3 < 6)
// console.log(3 >= 6)
// console.log(3 <= 6)
// console.log(3 == 6)
// console.log(3 != 6)

// -------* loose equality *----------

// console.log("5" == 5);

// // ---------* strict equality *-------

// console.log("5" === 5);

// console.log(true && false);
// console.log(true || false);

// const age = 18;
// const hasId = true;

// const canEnterClub = age >= 18 && hasId === true;
// console.log(canEnterClub);

// console.log(!true);
// console.log(!56);
// console.log(!0);
// console.log(!false);


// console.log("subhash" / 5);
// console.log(typeof NaN)

//-------------* conditionals *-----------*


// const isLoggedIn = false

// if(isLoggedIn) {
//     console.log("you can like, comment");
// } else{
//     console.log("plesse first login");
// }

// let temp = 26;

// if(temp >= 25){
//     console.log("Ac chala do");
// } else{
//     console.log("ac mat chalao ");
// }

// let day = "fri";
// if (day === "mon") {
//     console.log("1st day of the week");
// } else if (day === "tue") {
//     console.log("2nd day of the week");
// } else if (day === "wed") {
//     console.log("3rd day of the week");
// } else if (day === "thu") {
//     console.log("4th day of the week");
// } else if (day === "fri") {
//     console.log("5th day of the week");
// } else if (day === "sat") {
//     console.log("6th day of the week");
// } else if (day === "sun") {
//     console.log("7th day of the week");
// } else {
//     console.log("worng day");
// }

//  score to grade convert 






//  nested if else jio hotstar

// const isLoggedIn = false;
// const isSubscribed = true;

// if (isLoggedIn) {
//     if(isSubscribed) {
//         console.log("you can access premium content.");
//     } else {
//         console.log("you dont have any premium plan to access this content.")
//     }

// } else {
//     console.log("please login");
// }


// switch case

const day = "tue";

switch (day) {
    case "mon":
        console.log("1st day of the week");
        break;
    case "tue":
        console.log("2nd day of the week");
        break;
    case "wed":
        console.log("3rd day of the week");
        break;
    case "thu":
        console.log("4th day of the week");
        break;
    case "fri":
        console.log("5th day of the week");
        break;
    case "sat":
        console.log("6th day of the week");
        break;
    case "sun":
        console.log("7th day of the week");
        break;
    default:
        console.log("wrong day");

}