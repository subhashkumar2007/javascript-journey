

// ---------------------------------------------* Student Result System *-----------------------------------------------

const studentName = "Subhash kumar" ;
const rollNumber = 101;
const mathMarks = 85;
const scienceMarks = 78;
const englishMarks = 92;

// ----------* total marks calculate *---------

const totalMarks = mathMarks + scienceMarks + englishMarks ;

// ----------* Percentage *--------------------

const percentage = (totalMarks/300) * 100;

// -----------* Grade (percentage ke hisab se) *------------------

let grade;
if (percentage >= 90){
    grade = "A";
}else if(percentage >= 80){
    grade = "B";
}else if (percentage >= 70){
    grade = "C";
}else if(percentage >= 60){
    grade = "D";
}else if (percentage >= 40){
    grade = "E";
}else{
    grade = "F";
}

// ----------------* pass or fail *------------

let result;
if(mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40){
    result = "Pass" ;
}else {
    result = "Fail" ;
}

console.log("Student Name" , studentName);
console.log("Roll Number" , rollNumber);
console.log("Total Marks" , totalMarks);
console.log("Percentage" , percentage.toFixed(2) + "%");
console.log("Grade" , grade);
console.log("Result" , result);


