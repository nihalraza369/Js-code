//Test for Function

//Q: 01 for a given array with  prices 5 items []all item items have an offer of 10% of on them. change the array the store final price
//after applying offer
function conut(){
    let count = 0;
    for (let i = 0; i < 1000000000; i++) {
        count++;
    }
    return count;
}
console.log(conut()); // 1000000000

//===============================================================end===================================================================



//Q: 01 for a given string find the number of characters in it?
function conut1(str){
    for(let newv of str){
        console.log(newv); // This will print each character of the string

        
    }
}

console.log(conut1("osman")); // undefined





//===============================================================end===================================================================

//Q: 03 for a given string find the number of vowels in it?
// vowels are a,e,i,o,u

function conut2(str1){
    let count2 = 0;
    for(let newv2 of str1){
        if(newv2 === "a"|| 
            newv2 === "e" || 
            newv2 === "i" ||
             newv2 === "o" ||
              newv2 === "u")
              {
            count2++;
        }
    }
   
    return count2; // This will return the count of vowels in the string
} 
console.log(conut2("osman")); // 2
console.log(conut2("hello")); // 2
console.log(conut2("aeiou")); // 5
console.log(conut2("xyz")); // 0
console.log(conut2("")); // 0


