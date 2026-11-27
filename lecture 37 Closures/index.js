

// function outter(){
//     const a = 5;
//     function inner (){
//         console.log(a);
//         // const a = 7;
//     }
//     return inner;
// } 

// const responce = outter();
// responce();


function outter(){
    let count = 0;
    function counter(){
        count = count + 1;
        console.log(count);
    }
    return counter
}

const counter1 = outter();
const counter2 = outter();
counter1();
counter1();
counter2();

