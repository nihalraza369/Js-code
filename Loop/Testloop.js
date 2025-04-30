//Lets text for loop//

//Q:1   print all Even  Numbers from 0  to 100
for (let num=0;num<=100;num++){
    if(num%2 !== 0){
        //Even Numbers
        console.log("num",num);
    }
}

//######################################################################################################################################################################
// Question:02    create a game where you start  with any random number.ask the user keep guessing the game number untill the user enter the correct value
let gamenum=25;
let usernum=prompt("guess the game number :")
while(usernum!==gamenum){
    usernum=prompt("you entered wrong number. gues again :")
}
console.log("congrulation");
