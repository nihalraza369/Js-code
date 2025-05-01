//Function in Js:  redundacy = repeatition of code
//Block of code that performs a specific task,can be invoked whenever needed

function myFunction() {
    console.log("Hello nihal!");
    console.log("Welcome to JavaScript Functions!");
    
}
myFunction(); // Calling the function to execute it
myFunction(); // Calling the function again to execute it
myFunction(); // Calling the function again to execute it       

function myFunction4(){
    return 5; // Return the value 5
}
let result1 = myFunction4(); 
console.log(result1); 

//parameterized function:
function myFunction1(msg,n) {
    console.log(msg,n); // Log the message passed to the function    
}
myFunction1("Hello nihal!","i love Js"); //argument


function myFunction2(x,y){
    console.log(x+y); 
}
myFunction2(5,10);


function myFunction3(x,y){
    return x*y; // Return the sum of x and y
}
let result = myFunction3(5,5); // Call the function and store the result in a variable
console.log(result);




function myFunction5(x,y){
    console.log("before return");
    return x*y; 
    console.log("after return"); // This line will not be executed
    //because the function has already returned a value
}
let result2 = myFunction5(5,5); 
console.log(result2); 





//Arrow function:
//Arrow function is a shorter syntax for writing function expressions in JavaScript.

let message1 = (a,b) => {
    console.log(a+b);
}
console.log(message1(3,4)); 



let message=(a,b) =>{
 return a+b; 
}
let sum0=message(3,4)
console.log(sum0); 



let message2=(a) => {
    return a; 
}
let sum1=message2(3)
console.log(sum1);




let printhello=() => console.log("hello"); 
console.log(printhello());

