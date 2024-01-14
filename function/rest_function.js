// function myfunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`a is ${b}`);
//     console.log(`a is ${c}`);
//     console.log(`a is` ,c);


// }
// myfunc(3,4,5,6,7,8,9,10);


// add all number

function addAll(...number) {
    console.log(number);
    console.log(typeof number);
    console.log(Array.isArray(number));
};
addAll(3, 2, 4, 5, 89, 1, 2);


function addAlls(...number) {
    let total = 0;
    for (let num of number) {
        total = total + num;
    }

    return total;
}
 const ans = addAlls(3, 2, 4, 5, 89, 1, 2);
 console.log(ans);



