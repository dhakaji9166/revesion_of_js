// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];

// for ( i =0 ; i<=10; i++){
//     console.log(i);
// }
let fruits2 = []
for (let i = 0; i <= fruits.length - 1; i++) {
    // console.log(fruits[i]);
    (fruits[i].toLocaleUpperCase());
    fruits2.push(fruits);
}
console.log(fruits2)


console.log(fruits.length);
console.log(fruits[fruits.length - 2]);