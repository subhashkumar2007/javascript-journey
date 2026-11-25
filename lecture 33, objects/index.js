
// let product1 = ["iphone", 59999, 4.5, 75 , 10]

// let product2 = {
//     productName: "Iphone 20 pro max",
//     price: 59999,
//     avgRating: 4.5,
//     totalReviews: 75,
//     discount: 50,
//     printProductName : function(){
//         console.log(this.productName);
//     },
//     printDiscount(){
//         console.log(this.discount,"%");
//     }

// }

// console.log(product2.price);

// product2.printProductName();
// product2.printDiscount();



// console.log(Object.keys (product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));



// for( value of product1) {
//     console.log(value);
// }

// for(let i = 0 ; i < product1.length; i++){
//     console.log(product1[i]);
// }


// product1.forEach(function(value , index){
//     console.log(value , index);
// })






// function b (num){
//     console.log(num);
//     num()
//     console.log("b");
// }

// b(function a (){
//     console.log("a");
// })





// for (value in product2){
//     console.log(product2[value]);
// }


// -------------------------------* Destructuring *-------------------------


// let product1 = ["iphone", 59999, 4.5, 75 , 10]

// const [a , b , c, d, e] = ["iphone", 59999, 4.5, 75 , 10]
// console.log(e);


let product2 = {
    productName: "Iphone 20 pro max",
    price: 59999,
    avgRating: 4.5,
    totalReviews: 75,
    discount: 50,
    printProductName: function () {
        console.log(this.productName);
    },
    printDiscount() {
        console.log(this.discount, "%");
    }

}

// let {price , printDiscount , avgRating} = product2;

// // console.log(price , printDiscount() , avgRating);

// for ([Key , value] of Object.entries(product2)){
//     console.log(Key , value);
// }




let arr = [53, 15, 626, 7, 43, 57, 23, 54, 752, 43]

// console.log(arr);
// console.log(...arr);

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

let a = [1, 2]
let b = [3, 4]

let c = [...a, ...b] // array merging by spred operator
// console.log(...c);


let product1 = ["iphone", 59999, 4.5, 75, 10]

const [n, p, ...hello] = ["iphone", 59999, 4.5, 75, 10]
// console.log(hello);


function add(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5
}

// console.log(add(4, 5, 25, 254, 2 ));

function add(...numbers) {
    let total = 0;
    for (value of numbers) {
        total += value
    }
    return total;
}

// console.log(add(4, 5, 25, 254, 2 ));

let { price, productName, ...remaining } = product2

// console.log(price, productName, remaining);