// block scope vs function scope 

// let and const are block scope;

{
    const lastName = "Dhaka"
    let firstName = "lalchand";
    console.log(firstName);
    console.log(lastName);

}
// console.log(firstName);
// console.log(lastName);

// var is function scope ;


function myApp() {
    if (true) {
        var firstNam = "lalchand";
        // const firstNam = "lalchand";

        console.log(firstNam);
    }
};
myApp();
// console.log(firstNam);
