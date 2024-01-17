// This and the window keyword

 console.log(this);  //also we can write window here same result find ;

 function myfunction(){
    console.log("hello world");
 }
 myfunction();
 console.log(window);

 function myfunction1(){
    console.log("hello world");
 }
 window.myfunction1();

 function myfunction2(){
    console.log(this);
 }
 window.myfunction2();