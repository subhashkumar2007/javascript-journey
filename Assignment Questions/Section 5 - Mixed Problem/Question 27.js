

// ----------------------------------* Electricity Bill + Discount *----------------------------------------------------------------


let units = 300;
let origunalBill = 0;

if (units <= 100){
    origunalBill = units * 5;
}else if (units <= 200){
    origunalBill = 100 * 5 + (units - 100) * 7;
}else {
    origunalBill = 100 * 5 + 100 * 7 + (units - 200) * 10;
}

let discount = 0;

if (origunalBill >= 2000){
    discount = origunalBill * 10 / 100;
}

let finalBill = origunalBill - discount;

console.log("Units: " + units);
console.log("OriginalBill: " + origunalBill);
console.log("Discount: " + discount);
console.log("FinalBill: " + finalBill);