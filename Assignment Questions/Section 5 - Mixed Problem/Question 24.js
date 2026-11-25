

// --------------------------------------* ATM Transaction *-------------------------------------------

let balance = 10000;
let withdrawAmount = 3000;

console.log("Balance: " , balance);
console.log("withdrawAmount: ", withdrawAmount);
console.log("");

if(withdrawAmount <= 0){
    console.log("invalid amount");
}else if (withdrawAmount > balance){
    console.log("insufficient amount");
}else{
    balance = balance - withdrawAmount;
    console.log("withdrawal successful");
    console.log("Remaining balance: ", balance);
}


// --------------------------------------------------------------------------------

// let balance = 10000;
// let withdrawAmount = 2000;

console.log("Balance: " + balance);
console.log("Withdraw: " + withdrawAmount);
console.log("");

if(withdrawAmount <= 0){
    console.log("Invalid amount");
}else if(withdrawAmount > balance){
    console.log("Insufficient balance");
}else {
    balance = balance - withdrawAmount;
    console.log("Withdrawal successful");
    console.log("Remaining balance: " + balance);
}