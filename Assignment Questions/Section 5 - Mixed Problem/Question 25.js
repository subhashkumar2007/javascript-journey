

// -------------------------------------------* Movie Ticket System * --------------------------------------------------------

let age = 25;
let NumberOfTickets = 3;

let ticketprice = 0;

if(age < 12){
    ticketprice = 100;
}else if(age <= 59){
    ticketprice = 200;
}else{
    ticketprice = 120
}

// total ticket price calculate.

let total = ticketprice * NumberOfTickets;

console.log("age: " ,age);
console.log("Tickets: ", NumberOfTickets);
console.log("");
console.log("Total: " , total);