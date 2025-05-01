//Methods in array:

//ForEach in loop array:

let array = [1, 2, 3, 4, 5];
array.forEach(function name1(jj){
  console.log("tha Square of",jj,"=","(",jj*jj,")");
  
})
 
console.log("OR");


let array1 = [1, 2, 3, 4, 5];
array1.forEach((jj1)=>{
  console.log("tha Square of",jj1,"=","(",jj1*jj1,")");
})
 
console.log("AND");


let name = ["karachi","lahore","islamabad","peshawar","quetta"];
name.forEach((city,i)=>{
  console.log(i,": the pakistan is city name =",city.toUpperCase(),name);
})


let number = [1, 2, 3, 4, 5];
let name2=(number) => {
  console.log(number*number);
}
number.forEach(name2);// Call the function for each element in the array



//Map in loop array:

let number1 = [1, 2, 3, 4, 5];
number1.map((val)=>{
  console.log(val*val);
})

console.log("OR");

let number2=[1,2,3,4,5];
let name3=(number2) => {
  console.log(number2*number2)
}
number2.map(name3);

console.log("AND");



//Filter in loop array:
let number3=[1,2,3,4,5];
let newnum=number3.filter((val)=>{
  return val%2!==0;
})
console.log(newnum);

console.log("AND");

let number4=[1,2,3,4,5];
let newnu1=number3.filter((val)=>{
  return val%2===0;
})
console.log(newnu1);





//Reduce in loop array:

let number5=[1,2,3,4,5];
let newnum2=number5.reduce((res,val)=>{
  return res+val;
})
console.log(newnum2);

//

let number6=[1,2,3,4,5];
let newnum3=number5.reduce((res,val)=>{
  return res*val;
})
console.log(newnum3);