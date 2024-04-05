// Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10.
// Return the array with the new values

let num = [1,2,3,4,5,6,7,8,9,10]
function consoleArray(){
   num.forEach((num,index) => {
      if (index < 4){
         num[index] = num * num
      }
      else if(index >= num.length -2){
         num[index] = num+10;
      }
       console.log(num)
       return num
   }
   )}
   consoleArray(num)



// Write a program that takes in the following array and use a while loop to iterate and break when the item is 
//equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9]

let arrNumLoop = (arrNum) => {
   num.forEach((arrNum,index) => 
 (index )

   )}

const leg = true;
const kickBall = (leg) => {
    while(leg){
        console.log("Kick the ball");
        break;
    }
    
}

// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
// Write a function that accepts an array of strings and console.logs each element using a for loop.
// Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.

