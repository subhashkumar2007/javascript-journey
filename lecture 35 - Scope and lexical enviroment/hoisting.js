

// -----------------------------------------------------------------------* Hoisting *-----------------------------------------------------------

// console.log(a);
// // let a = 6;
// // const a = 43;
// var a = 45;

// addNum()
// function addNum(){
//     console.log("hello");
// }


// console.log(addTwoNum()); 

// var addTwoNum = function(){
//     console.log("function expression");
// }

// var a = 5;

// console.log(b);
// let b = 7;

// function addNum(){
//     let a = 6;
//     console.log(a);
// }

// addNum()
// addNum()

// var x = 6;

// function random(){
//     console.log(x);
//     var x = 3
// }

// random()

function outter(){

    let username = "subhash"
    function inner(){
        console.log(username);
    }

    return inner
}

const inner = outter()

let username = "vikash"

inner();

 