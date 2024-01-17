const user1 = {
    firstName: "lalo",
    age: 23,
    about : function(){
        console.log(this.firstName,this.age)
    }
}

// user1.about();

const myfun = user1.about;
myfun();    // this return underfined underfined;

const myfun1 = user1.about.bind(user1);
myfun1();  