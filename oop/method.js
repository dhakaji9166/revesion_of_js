// methode 

// function inside object

// const person ={
//     firstName : "mohit",
//     age : 18,
//     about : function(){
//         // console.log(this)  // here this mean complete object (person);
//         console.log(this.firstName , this.age);
//     }
// }

// person.about();


// const person ={
//     firstName : "mohit",
//     age : 18,
//     about : function(){
//         console.log(`person name is ${this.firstName} age is ${this.age}`)
//     }
// }

// person.about();


function personinfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`)
}

const person ={
    firstName : "lalchand",
    age : 18,
    about: personinfo
}

const person1 ={
    firstName : "mohit",
    age : 8,
    about: personinfo
}

const person2 ={
    firstName : "rohit",
    age : 28,
    about: personinfo
} 


person.about();
person1.about();
person2.about();

