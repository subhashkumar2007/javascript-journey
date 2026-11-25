// let subhashmarks = 50 + 56 + 23;
// let ritikmarks = 80 + 70 + 90;
// let rahulmarks = 20 + 30 + 70;
// let anumarks = 30 + 40 + 75;

// console.log("subhashmarks" + ritikmarks);

// let productprice = 3000;
// let discountAmount = 3000 * 10/100;
// let deliveryCharge = 50;
// let totalAmount = productprice - discountAmount + deliveryCharge

// *---------------* FUNCTION *----------------*


// function totalMarks() {
//     console.log("skraj");
// }

// totalMarks()

// function totalMarks(student, math, science, english) {
//     console.log(`${student} total marks : `,math + science + english);
// }

// totalMarks("subhash", 70, 75, 60)
// totalMarks("vikash", 47, 55, 45)
// totalMarks("aman", 65, 25, 35)
// totalMarks("rahul", 49, 75, 55)

// function greetingMsg(userName) {
//     console.log(`WelCome ${userName}`);
// }

// greetingMsg("subhash")

// function greetingMsg(userName, greetings) {
//     console.log(`${greetings}, ${userName}`);
// }

// greetingMsg("subhash" ,"welcome")
// greetingMsg("subhash" ,"hiiii")
// greetingMsg("subhash" ,"hello")
// greetingMsg("subhash" ,"kemchho")


// function calculator(num1, num2, operator) {
//     switch(operator) {
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//             break;
//         case "-":
//             console.log(`{num1} ${operator} ${num2} =`, num1 - num2 );
//     }

// }

// calculator(5,8, "+")


// function totalMarks( mathMarks, scienceMarks, physicsMarks){
//     return mathMarks + scienceMarks + physicsMarks;
// }

// function calPercentage(studentName, mathMarks, scienceMarks, physicsMarks){
//     let total = totalMarks(mathMarks, scienceMarks, physicsMarks);
//     let percentage = (total / 300) * 100
//     console.log(`${studentName} percentage :` , percentage);
//     return percentage
// }

// let percentage = calPercentage("subhash", 50, 70, 80)
// console.log(percentage);

// totalMarks("subhash", 50, 70, 80)



// fun1()
// function fun1(){
//     console.log("function declaration");
// }

// console.log(add(5,6));
// let add = function (num1 , num2) {
//     return num1 + num2
// }

// --------------ARRO FUNCTION------------

        
// syntex  1

let add = num1 => num1 + 4;


// syntex2

let add = (num1 , num2) => num1 + num2;

// syntex3

let add = (num1 , num2) => {
    // something
    // something
    return num1 + num2
};

console.log(add(5, 7));

