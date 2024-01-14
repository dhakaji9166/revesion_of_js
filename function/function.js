// A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly braces, { /* … */ }.



function singHappyBirthday() {
   console.log("happy birthday to you ............?")
} singHappyBirthday();

function twoplusfour() {
   console.log(2 + 4);
} twoplusfour();


function sum(a, b) {
   return a + b;
}
const returnvalue = sum(10, 20);
console.log(returnvalue);


// odd even value 

function isEven(number) {
   if (number % 2 == 0) {
      return true
   } else {
      return false
   }
}

console.log(isEven(51));

//input : string
//output : firstCharacter

function firstChar(Anystring) {
   return Anystring[1]
}

console.log(firstChar("lalchand"));


//input : array , target(number);
//output : index of target if target present in array;


function findtarget(arry, target) {
   for (i = 0; i < arry.length; i++) {
      if (arry[i] === target) {
         return i
      }
   } return -1;
}
const array = [1, 3, 4, 5, 6, 7, 88, 0];

const ans = findtarget(array, 5);

console.log(ans);


// function expression  

const sing =  function () {
   console.log("happy birthday to you")
}();