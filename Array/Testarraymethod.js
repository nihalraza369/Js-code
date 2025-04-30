//Q :01  lets create an array  to store company >[]
/*   a:Remove the first company  from the array
     b:Remove the Uber  & Add Ola  in tis place
     c:Add Amazon  at tha end
*/

//a:Remove the first company  from the array
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
companies.shift()
console.log(companies);



//b:Remove the Uber  & Add Ola  in tis place
let companies1=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
companies1.splice(2,1,"OLA")
console.log(companies1);




//c:Add Amazon  at tha end
let companies2=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
companies2.push("Amazon")
console.log(companies2);
