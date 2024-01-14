// lexical scope 

// const myvar = "vaule12";

function myApp() {
    const myvar = "value659";

    function myfunc() {

        // const myvar = "value65";
        function myfunc1() {
            // const myvar = "value65";

            console.log("inisde myfuc1", myvar)
        }
        myfunc1();
    }

    console.log(myvar);
    myfunc();
}
myApp();