 let student = {
    name : "subhash",
    rollNo : 7,
    subjects : ["math", "english", "science"],
    totalMarks : 600
 }

//  let {subjects , name, rollNo} = student;
//  console.log(subjects);


// //how to rename key
// let{subjects : vishay , ...variable} = student
// //subjects -> vishay
// // let vishay = subjects
// console.log(vishay);

 
let{subjects : vishay , totalMarks = 500, ...variable} = student
// console.log(vishay);
// console.log(totalMarks);



// ---------------------------------* object merging using spread operator *-------------------------------

let obj1 = {
    name : "subhash",
    phone : 5429300303,
    name : "yash"
}

let obj2 = {
    address : "india",
    adharCard : 543209238483,
    name : "vikash"
}

let obj3 = {...obj1 , ...obj2}

// console.log(obj3);


// --------------------------------* array and object update *-------------------------------


const arr = [1, 2, 3, 4]

arr[1] = "updated"

// console.log(arr);

// --------* object update *--------

// let obj = {
//     name : "rahul",
//     rollNo : 25
// }

// obj = {
//     add : "aman"
// }


const obj =  {
    name : "rahul",
    rollNo : 25,
    address : null
}

obj["name"] = "summit"
obj.name = "ankush"

delete obj.rollNo // property deleted

// console.log(obj);

// console.log(obj.address?.street);


// ------------------------* splice *-----------------------------------------------------------------------------


let arr1 = [1, 2, 3, 4, 5, 6]

// arr1.splice(1, 3) // delete
// arr1.splice(3, 0 , "sk") // add
// arr1.splice(3, 2, "raj") // replace

// console.log(arr1);

// -------------------------------* slice *--------------------------------------------------------

let arr2 = [1, 2, 3, 4, 5, 6, 7]

let trimArr = arr2.slice(1, 4)

// console.log(trimArr);

// --------------------------------------------------* indexof *---------------------


// console.log(arr2.indexOf(5));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let res = arr2.find((value) => {
    return value === 5;
})

// console.log(res);

// ------------------------------------------------------

let resindex = arr2.findIndex((value) => {
    return value === 5;
})

// console.log(resindex);


// ------------------------------------------* flat *------------------------------------------------------------------------------------------


let arr3 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]]

// console.log(...arr3);
// console.log(arr3.flat(Infinity));


// ----------------------------------------* mutability *--------------------------------------------------------------------------------------------------------------------------------------


let arr4 = [4, 5, 6, 62, 213, 13]

let arrCopy = arr4;
let arrCopy2 = [...arr4] // spread opetator

arrCopy2.pop()


// console.log("arr4", arr4);
// console.log("arrCopy", arrCopy2);


