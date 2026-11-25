// ------------------------------------* Shopping Bill *-----------------------------------


let price = 500;
let Quantity = 3;

// total bill
let OriginalBill = price * Quantity;

// 10% discount
let Discount = (OriginalBill * 10) / 100;

// final bill
let FinalBill = OriginalBill - Discount;

console.log("Original Bill: " + OriginalBill);
console.log("Discount: " + Discount);
console.log("FinalBill: " + FinalBill);

