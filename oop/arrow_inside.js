//arrow function

// arrow function =>> in the arrow function  this value soundering se leta hai value block in value leta hai;

const user1 = {
    firstName : "lalchand",
    age :8,
    about : () =>{
        console.log(this);
        console.log(this.firstName,this.age);
    }
} 

user1.about();


// another way to create 

const user2 = {
    firstName: "lalchand",
    age : 24,
    about(){
        console.log(this.firstName,this.age);
    }
}

user2.about();

