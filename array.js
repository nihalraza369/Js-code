
let array=[1,2,3,4]
console.log(array);
console.log(array.length);//property

let array1=["mehmet","osman","ertughrul","salahuddin","alp arsalan"]
console.log(array1);
console.log(typeof array1);//object bcz like a this work in object


//Arrays in indices
let indices=[1,2,3,4,5,6,7]
console.log(indices[4])
console.log(indices[5]);
console.log(indices[3]);
console.log(indices[0]);
console.log(indices[10]);//this is not exist bcz 10 is not avalaible


//Array is mutable mean this can change value
let mutable=[1,2,3,4,5,6]
console.log(mutable);
console.log(mutable[0]=6);
console.log(mutable);

// if we use change the value for string but string is immutable and array is mutable example:
//String:
let mutable1="noni"
console.log(mutable1);
console.log(mutable1[0]="o");//that's wrong
console.log(mutable1);//can't run


//Looping over an array:
// print all element of an array

let lf=[1,2,3,4,5]
for(let i=0;i<lf.length;i++){
    console.log(lf[i]);
}



let lf1=["noni","paa","bilal","raza","noman","raza"]
for(let i1=0;i1<lf1.length;i1++){
    console.log(lf1[i1]);
    
}
///////////////////////////     or    //////////////////////////////

let lf2=["noni","paa","bilal","raza","noman","raza"]
for(let i2=0; i2<=5; i2++){
    console.log(lf2[i2]);
}



let ff=["i","love","baba","and","i","love","mom"]
for(let newff of ff){
    console.log(newff.toLocaleUpperCase());
    
}





