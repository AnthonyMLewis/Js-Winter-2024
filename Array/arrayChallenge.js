let studentNames =['Bill','William','Sara','Robert','Anthony','Rechel'];
console.log(studentNames.length);

//pop
console.log(studentNames);
let popStudentNames = studentNames.pop();
console.log(popStudentNames);
console.log(studentNames);

//push
let studentNames1 =['Bill','William','Sara','Robert','Anthony','Rechel'];
console.log(studentNames1);
let pushStudentNames = studentNames1.push('Eve','Adam');
console.log(pushStudentNames);
console.log(studentNames1);

//shift
let studentNames2 =['Bill','William','Sara','Robert','Anthony','Rechel'];
console.log(studentNames2);
let shiftStudentNames = studentNames2.shift();
console.log(shiftStudentNames);
console.log(studentNames2);

//unshift
let studentNames3 =['Bill','William','Sara','Robert','Anthony','Rechel'];
console.log(studentNames3);
let unshiftStudentNames = studentNames3.unshift();
console.log(unshiftStudentNames);
console.log(studentNames3);

//splice
let studentNames4 =['Bill','William','Sara','Robert','Anthony','Rechel'];
let spliceStudentName = studentNames4.splice(5,0,'D','R','U');
console.log(spliceStudentName);
console.log(studentNames4);

// finding John
let studentNames5 =['Bill','William','Sara','Robert','Anthony','Rechel'];
let includingStudentNamedJohn = studentNames5.includes('John');
console.log(includingStudentNamedJohn);
console.log(studentNames5);

// Finding index of Kate
let studentNames6 =['Bill','William','Sara','Robert','Anthony','Rechel'];
let indexOfStudentNamedKate = studentNames6.indexOf('Kate');
console.log(indexOfStudentNamedKate);
console.log(studentNames6);

//Reverse array and find the last index value
let studentNames7 =['Bill','William','Sara','Robert','Anthony','Rechel'];
studentNames7.reverse();
console.log(studentNames7);
console.log(studentNames7[5]);

// Find out if the first index value equals to last index value (Hint: use comparison operator. NOT LOOP )
let studentNames8 =['Bill','William','Sara','Robert','Anthony','Rechel'];
console.log(studentNames8[0] === studentNames8[5]);


