//string method in js


//ToUppercase:
let str="nonipaa"
str.toUpperCase();//here is not new variable
console.log(str);
//that's wrong bcz here is not new variable

//here that's right
let large="nonipaa"
let string=large.toUpperCase();
console.log(string);


//toLowerCase:
let small="NONIPAA"
let strings=small.toLowerCase();
console.log(strings);


//trim method in string:
let trim="     noni paa  "//that's wrong 
console.log(trim);

let tirms="     noni paa  "//that's right
console.log(trim.trim());


//


//slice:
let slice="0123456789"
console.log(slice.slice(1,2));
let slice1="0123456789"
console.log(slice1.slice(0,2));
let slice2="0123456789"
console.log(slice2.slice(4,7));
// variable
let slicev="nonipaa"
console.log(slicev.slice(0,3));
let slicev1="nonipaa"
console.log(slicev.slice(1,4));






//concat:
let value1="noni"
let value2="paa"
let res=value1.concat(value2)
 console.log(res);
 






 //replace:
let replace="ponipaa"
console.log(replace.replace("p","n"));

let replace1="nonikaa"
console.log(replace1.replace("k","p"));

let replace2="nonipaa"
console.log(replace2.replaceAll("a","fuck"));






//charAt:
let chart="i love  js"
console.log(chart.charAt(4));
let chart1="i love nihal"
console.log(chart.charAt(3));





