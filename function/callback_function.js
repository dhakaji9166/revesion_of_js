//In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the completion of a specific task. Callback functions are commonly used in asynchronous programming, such as handling events, making AJAX requests, and working with timers.


function myfun2(age){
    console.log("inside my fun 2");
    console.log(`my age is ${age}`);
};

function myfunc(callback){
    console.log("my name is lalchand");
    callback(23);
}

myfunc(myfun2);