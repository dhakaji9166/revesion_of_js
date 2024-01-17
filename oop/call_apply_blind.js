// Call Apply Bind Method

// const user1 = {
//     firstName : "lalchand",
//     age:24,
//     about : function(){
//         console.log(this.firstName , this.age)
//     }
// }

// const user2 = {
//     firstName : " mohit",
//     age : 25,

// }

// user1.about();
// user1.about.call(user2);


function about(hobby,favMusician){
    console.log(this.firtName , this.age ,hobby ,favMusician);
}


const user1 = {
    firtName : "Ram",
    age:23,
}

const user2 = {
    firtName : "Ramesh",
    age:24,
}

about.call(user1 , "guitar" ,"moazrt");
about.call(user2, "guitar" ,"moazrt");


// apply  =>> apply me extra agrument ki value string me pass hoti hai;


about.apply(user1 , ["cricket" ,"moazrt"]);
about.apply(user2, ["football" ,"moazrt"]);

// bind  =>> return the function blind store the value in any function;

const myfun = about.bind(user1 , "baskate" ,"singing")
myfun();

























