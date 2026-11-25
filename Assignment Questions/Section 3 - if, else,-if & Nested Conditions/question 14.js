

// --------------------------------------* Stdent Result *-----------------------------------


let Mark1 = 60;
let Mark2 = 75;
let Mark3 = 65;

if (Mark1 >= 40 && Mark2 >= 40 && Mark3 >= 40) {
    let average = (Mark1 + Mark2 + Mark3) / 3;
    console.log("Average: " + average.toFixed(2));

    if(average >= 75){
        console.log("Distinction");
    }else if(average >= 60) {
        console.log("First Divison");
    }else if(average >= 50){
        console.log("Second Divison");
    }else {
        console.log("Pass");
    }
}else {
    console.log("Result: Fail");
}

