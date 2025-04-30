//Test for Array

//Q : 01  for a given array with  prices 5 items []all item items have an offer of 10% of on them. change the array the store final price 
//after applying offer
let item=[250,300,600,900,100]
let i=0
for(val of item){
    console.log(`this ${i} and ${val}`);
    let offer=val/10
    let res=val-offer
    console.log(res);
    i++
}
//========or==========
let item1=[250,300,600,900,100]
let i1=0
for(val1 of item1){
    console.log(`this ${i1} value ${val1}`);
    let offer1=val1/10
    let res1=item[i1]-offer1
    console.log(res1);
    i1++
}
//========or============
let item2=[250,300,600,900,100]
let i2=0
for(val2 of item2){
    let offer2=val2/10
    item2[i2] =item2[i2]-offer2
   
    console.log(`${i2}: this value ${val2} of avr= ${item2[i2]} `);
    i2++
}

//==================================================================  end  ===================================================================

//Q: 02 for a given array  with mark student[] find theaverage  mark of tha entire class?

let marks=[85,97,44,37,76,60]
let sum =0
for(newv of marks){
sum+=newv;
}

let aj=sum / marks.length
console.log(`avg mark of the class = ${aj}`);
