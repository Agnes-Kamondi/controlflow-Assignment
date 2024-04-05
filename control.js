// Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10.
// Return the array with the new values
var number= [1,2,3,4,5,6,7,8,9,10];
function multiplyAdd(number){
    number.forEach((num, index)=>{
        if(index < 4){
            number[index] = num * num;
        }
        else if(index >= number.length - 2){
            number[index]= num + 10;
        }
 })
    console.log(number);
    return number;
     };
multiplyAdd(number);

// Write a program that takes in the following array and use a while loop to iterate and break when the item is 
//equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9];
let i = 0;
     while (i < arrNum.length)
      {  if (arrNum[i] === 3)
        break;
         console.log(arrNum[i])
         i++;
       };


// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index: 
// let fruits= ['apple','plum','banana','strawberries','kiwi']
let fruits= ['apple','plum','banana','strawberries','kiwi']
function arrStrings(array) {
    for (let i = 0; i < array.length; i++) {
        if (i === 1)
            continue;
            console.log(array[i])
        } };
  arrStrings(fruits);

// Write a function that accepts an array of strings and console.logs each element using a for loop.
   function arrString(arr)
   { for (let i = 0; i < arr.length; i++) {
       console.log(arr[i]); }
   }
    arrString(["January","March","April","May","June","May"]);

// Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
function reversedString(str){
  let reverse = '';
  let i = str.length - 1;
     while (i >= 0)
     { reverse += str[i]; i--; }
    return reverse; };
let reverseString = reversedString("Agnes");
 console.log(reverseString);

