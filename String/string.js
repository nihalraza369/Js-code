//string:
// string is a immutable(can't change in string)


//create string:
let name="nihalraza"
console.log(name);





// string lenght:
let name1="nihalnughman"
console.log(name1.length);




//string index/indices:
let name2="nihalraza"
console.log(name2[0]);
console.log(name2[1]);
console.log(name2[2]);
console.log("name2 of 3 =",name2[3]);




//escape character(next line "\n"):
let name3="nihal \n nughman"//next line
console.log(name3);



//gapspace character:
let name4="nihal \t nughman"//gap space
console.log(name4);
console.log(name4.length);






//template literals in string:
let str=`this is a template literal`
console.log(str);
 

// typeof template literals in string:
let strtype=`this is a template literal`
console.log(typeof strtype);





//taste in object for template litteral
let obj={
 item:"pen",
 price:12
}
console.log("the cost of",obj.item,"is",obj.price);//that's wrong


//=======================================================find right=============================================================================================
let obj1={
    item:"pen",
    price:12
}
console.log(`the cost of ${obj.item} is ${obj.price}`);//that's right

//$
let i=`this is template litteral ${1+2+3}`;
console.log(i);
 

