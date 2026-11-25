


// --------------------------------------------Simple ATM Menu -----------------------------------------

let balance = 10000;
let choice = 3;
let amount = 25000;

console.log("1. Check Balance");
console.log("2. Deposite Money");
console.log("3. Withdraw Money");
console.log("4: Exit");
console.log("");

switch (choice) {
    case 1:
        console.log("Current balance: " + balance);
        break;
    case 2:
        if (amount > 0) {
            balance = balance + amount;
            console.log("Deposite successful");
            console.log("New balance: " + balance);
        } else {
            console.log("Invalid amount");
        }
        break;
    case 3:
        if (amount <= 0){
            console.log("Invalid amount");
        }else if(amount > balance){
            console.log("Insufficient balance");
        }else {
            balance = balance - amount;
            console.log("Withdrawl successful");
            console.log("Remaing balance : "+ balance);
        }
        break;
    case 4:
        console.log("Thank you for using our ATM. Goodbye!");
        break;
    default:
        console.log("Invalid choice. Please select 1 to 4.");

}



