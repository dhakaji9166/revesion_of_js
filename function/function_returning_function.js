// function returning function 

// function myfunc(){
//     function hello(){
//         console.log("hello wolrd")
//     }
//     return hello ;
// }

// const ans = myfunc();
// ans();


function myfunc() {
    function hello() {
        return " hello wolrd"
    }
    return hello;
}

const ans = myfunc();
 console.log(ans());;