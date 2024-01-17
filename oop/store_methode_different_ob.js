// Store Method in different object

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