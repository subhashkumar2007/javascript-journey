

// --------------------------------------------* Restaurant Menu *------------------------------------------------

console.log("1. Burger ->  ₹150");
console.log("2. Pizza ->  ₹250");
console.log("3. Pasta ->  ₹180");
console.log("4. Sandwich ->  ₹120");
console.log("");

// Customer's choice------and-------quantity.

let choice = 2;
let quantity = 3;

let price = 0;

switch (choice) {
    case 1:
        price = 150;
        break
    case 2:
        price = 250;
        break;
    case 3:
        price = 180;
        break;
    case 4:
        price = 120;
        break;
    default:
        price = 0;
        console.log("Invalid choice");
}

if (choice >= 1 && choice <= 4 && quantity > 0) {
    let total = price * quantity;
    console.log("Choice: " + choice);
    console.log("Quantity: " + quantity);
    console.log("");
    console.log("Total: " + total);
}




