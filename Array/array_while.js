// while loop in array 

const fruits = ["apple", "grapes", "banana", "mango"];
const fruits1 = [];
let i = 0;
while (i < fruits.length) {
    // console.log(fruits[i]);
    // console.log(fruits[i].toUpperCase());
    fruits1.push(fruits[i].toUpperCase());
    i++;
};
console.log(fruits1);