// how to clone array 

// let array1 = ["items1","items2"];
// let array2 = array1;
// console.log(array1 === array2)

// let array1 = ["items1","items2"];
// let array2 =["items1","items2"];
// console.log(array1 === array2);

let array1 = ["items1","items2"];
// let array2 =["items1","items2"];

// let array2 = array1.slice(0);
// let array2 = array1.slice(0).concat(["items4","items5"]);

// let array2 = [].concat(array1);
// let array2 = [].concat(array1 , ["items6","items7"]);
// array1.push("items3");


//spread operator [...];

let arraymore = ["items8","items9"];
let array2 = [...array1 ,...arraymore]

// let array2 = [...array1];
// array1.push("items3");


console.log(array1 === array2);
console.log(array1);
console.log(array2);