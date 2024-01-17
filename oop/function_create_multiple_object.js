// Function to create multiple objects ;

//proto , prototype , class

const user1 = {
    firstName: "lalchand",
    lastName: "Dhaka",
    email: "lalchanddhaka916693@gmail.com",
    age: 24,
    address: "usha vihar , triveni nagar , jaipur",

    about: function () {
        return `${this.firstName} is ${this.age}`
    },

    is18: function () {
        return this.age >= 18;
    }
}

const user2 = user1.about();
console.log(user2);


// 1.>>function (that function create object )
// 2.>>> add key value pair.
// 3.>> object ko return krega

function createUser(firstName, lastName, age, email, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;

    user.about = function () {
        return `${this.firstName} is ${this.age}`
    }

    user.is18 = function () {
        return this.age >= 18;
    }

    return user
}


const userDetails = createUser("lalchand", "Dhaka", 30, "sjfdf@gmail.com", "usha vihar trivaeni nagar");
console.log(userDetails);
const age = userDetails.is18();
console.log(age);