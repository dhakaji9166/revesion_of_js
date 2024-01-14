// for of loop in array 

const fruits = ["apple","mango","grapes"];

for(let fruit of fruits){
    console.log(fruit);
}

// Iterating over a string 

const obj = "lalchand";

for(let name of obj){
    console.log(name);
}

const iterabl = [10, 20, 30];

for (let value of iterabl) {
  value += 1;
  console.log(value);
}

// in map 

const iterable = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);
  
  for (const entry of iterable) {
    console.log(entry);
  }
 
  
  for (const [key, value] of iterable) {
    console.log(value);
  }

  for (const [key] of iterable){
    console.log(key);
  }
 

//   in set methode 

const number = new Set([1,2,3,44,44,5,5,6,1,1,2,3,4]);
console.log(number);

for(const num of number){
    console.log(num);
}

console.log("br");

// Iterating over the arguments object 

function foo(){
    for(const value of arguments){
        console.log(value);
    }
}foo(1,2,3)


// method of array 

const fruit = ["apple","mango","grapes"];

const fruit1 = [];

for(array  of fruit){
  fruit1.push(array.toUpperCase());
}
console.log(fruit1);
  