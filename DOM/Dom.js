console.log(window);
console.log(document); // document is the root element of the DOM tree
console.log(document.documentElement); // documentElement is the root element of the DOM tree

window.console.log("hello nihal"); // window.console.log is used to log the message to the console
console.log(window.innerWidth); // window.innerWidth is used to get the width of the window


console.dir(document.body);
console.log(document.body);
console.log(document.head);

let name =document.body.childNodes
console.log(name);
console.log(name[0]);
console.log(name[1]);

let name2 =document.body.children[1]="nihal"
console.log(name2);


let heading=document.getElementById("heading"); // getElementById is used to select an element by its id
console.log(heading);


let heading2=document.getElementsByClassName("heading"); // getElementsByClassName is used to select an element by its class name
console.log(heading2);


let heading3=document.getElementsByTagName("h1"); // getElementsByTagName is used to select an element by its tag name
console.log(heading3);



let heading4=document.getElementsByTagName("p");
console.log(heading4);


let heading5=document.querySelector("h1"); // querySelector is used to select an element by its css selector
console.log(heading5);

let heading6=document.querySelectorAll("h1"); // querySelectorAll is used to select all elements by its css selector
console.log(heading6);


let heading7=document.querySelectorAll(".heading"); // querySelectorAll is used to select all elements by its css selector
console.log(heading7);

 let heading8=document.querySelectorAll("#heading"); // querySelectorAll is used to select all elements by its css selector
console.log(heading8);



let value=document.querySelector("div").innerText; // querySelector is used to select an element by its css selector
console.log(value);


let value2=document.querySelector("div").innerHTML; // querySelector is used to select an element by its css selector
console.log(value2);

let value3=document.querySelector("div").textContent; // querySelector is used to select an element by its css selector
console.log(value3);


let value4=document.querySelector("div").outerHTML; // querySelector is used to select an element by its css selector
console.log(value4);


let value5=document.querySelector("div").innerText="nihal"; // querySelector is used to select an element by its css selector
console.log(value5);

let value6=document.querySelector("div").tagName; // querySelector is used to select an element by its css selector
console.log(value6);

let value7=document.querySelector("div").className; // querySelector is used to select an element by its css selector
console.log(value7);

let value8=document.querySelector("div").id; // querySelector is used to select an element by its css selector
console.log(value8);