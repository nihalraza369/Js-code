//Array Method:



//Push():
let fooditem =["potato","tommnoto","banana"]
fooditem.push("apple","orange")
console.log(fooditem);



//Pop():
let market=["bussiness","trading","ecommerse","study"]
market.pop()
let value=market.pop()
console.log("this is market ",value);



//toString():
let courses=["Ai","cyversecurity","datascience","web development"]
console.log(courses.toString());

let n =courses.toString()
console.log(n);




//concat():
let man=["osman","gunduz","boran","goktuk"]
let women=["bala","malhun","aisha","goncha"]
let kid=["orhan","aluddin","fatima","halima","aysha","ghazi"]

let character=man.concat(women)
console.log(character);
let allcharacter=man.concat(women,kid)
console.log(allcharacter.toString());





//unshift() and shift():
//unshift():
let boy=["osman","gunduz","boran","goktuk"]
let boyn=boy.unshift("nihal")
console.log(boyn);
console.log(boy);


//shift():
let girl=["bala","malhun","aisha","goncha"]
girl.shift()
console.log(girl);



//Selice() and Splice():

//Selice():
let heroes=["mike","eleven","steve","wide"]
let newh=heroes.slice(0,2)
console.log(newh);



//Splice():
let heroes1=["mike","eleven","steve","wide"]
heroes1.splice(2,2,"noni","paa")
console.log(heroes1);
                           //Example of Splice:

//add Element:
let arr=[1,2,3,4,5]
arr.splice(0,2,1,2)//add
console.log(arr);


//Delete Element:
let arr1=[1,2,3,4]
arr1.splice(0,3)
console.log(arr1);

//Replace Element:
let arr2=[1,2,103,4,5]
arr2.splice(2,1,3)
console.log(arr2);

