
let originalPrices = [499, 649, 2349]

let discountedPrice = []

// for(value of originalPrices){

//     // let discount = value * 10 / 100
//     // discountedPrice.push(value - discount) // 10% discount

// discountedPrice.push(value * 0.9) // 10% discount
// }

originalPrices.forEach((value) => {
    discountedPrice.push(value * 0.9) // 10% discount
})

// console.log(originalPrices);
// console.log(discountedPrice);

// -----------------* easy method *------

const discountedPrice2 = originalPrices.map((value) => value * 0.9)

// console.log(discountedPrice2);


let students = [
    {
        name: "subhash",
        marks: 75,
    },

    {
        name: "vikash",
        marks: 74,
    },

    {
        name: "ritik",
        marks: 85,
    },

    {
        name: "ankit",
        marks: 80,
    },

    {
        name: "ankush",
        marks: 92
    }
]

// let studentNames = []

// students.forEach((value) => {
//     studentNames.push(value.name)
// })

// --------------------* second method *------------

// const studentNames = students.map((student) => student.name)
const studentMarks = students.map((student) => student.marks < 80)

// console.log( studentMarks);

// -------------* bosstiong marks *------------

let bosstedMarks = students.map((student) => { return { ...student, marks: student.marks + 10 } })

// let bosstedMarks = students.map((student) => ({...student, marks : student.marks + 10}))

// console.log(bosstedMarks);



// ----------------------------------------------------------------* Filter *---------------------------------------------------------

// let failedStudents = []
// students.forEach((student) => {
//     if(student.marks < 80) {
//         failedStudents.push(student)
//     }
// })

const failedStudents = students.filter((student) => student.marks < 80).map((student) => student.name)

// filter ka use ker ke hamko marks hi dekhanae hai name nahi to sir.

// const failedStudentsName = failedStudents.map((student) => student.name)

// console.log(failedStudents);



// -------------------------------------------------* reduce *-----------------------------------------------------------------------------------------------------------------------------------------


let marks = [56, 24, 63, 73, 80]

//let totalMarks = 0

// marks.forEach((mark) => totalMarks += mark)

// const totalMarks = marks.reduce((accumulator , currentValue) => {
//     accumulator = accumulator + currentValue
//     return accumulator
// }, 0)

const totalMarks = marks.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)

// console.log(totalMarks);


const attendance = ["persent", "persent", "absent", "persent", "absent"]

// --> {persent : 3 , absent : 2}

// ------------------* first method *---------------

// let obj = {}

// attendance.forEach((value)  => {

//     if(obj[value]){
//         obj[value] += 1
//     } else {
//         obj[value] = 1
//     }
// })

// console.log(obj);

// ----------------------* second method *---------------------

// by reducer method--------------#

const obj = attendance.reduce((acc, value) => {
    // if (acc[value]) {
    //     acc[value] += 1
    // } else {
    //     acc[value] = 1
    // }

    acc[value] = (acc[value] || 0) + 1;

    return acc
}, {})

console.log(obj);