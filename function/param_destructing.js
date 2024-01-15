//param destucting


//object 
// react 

const person = {
    firstName: "harshit",
    gender: "male",
    Qualification: "m.sc",
}

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age); // agar nhi hai to underfined aaega;
//     console.log(obj.Qualification.toUpperCase());

// }
// printDetails(person);

//destrictoring 

function printDetails({ firstName, gender, Qualification, age }) {
    console.log(firstName);
    console.log(gender);
    console.log(age); // agar nhi hai to underfined aaega;
    console.log(Qualification.toUpperCase())
}
printDetails(person);