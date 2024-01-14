//function inside function

function app() {
    const myfunc = () => {
        console.log("my func from app")
    };

    const addTwo = (num1, num2) => {
        return num1 + num2;
    };

    const multiTwo = (num1, num2) => num1 * num2;
    console.log("inside app");

    console.log(addTwo(4,5));
    myfunc();
    console.log(multiTwo(6,9));
};app();