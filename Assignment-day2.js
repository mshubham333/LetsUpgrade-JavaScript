/* Solution of questions 2ndBatch/2ndDay Assignment-1 */

/* Question 1- 
Program to search for a particular character in a string. */
let str = "shubhamMaheshwari";
let character = "w";
function findCharacter(str){
    if(str.indexOf(character) !==-1){
        return true;
    }
    return false;
}
console.log(findCharacter(str, character));

/* Question 2-
Program to convert minutes to seconds. */
let minutes = 30;
 let seconds = minutes*60;
 console.log(minutes +" "+ "Min" + " "+ "is equal to" + " "+ seconds +" "+"seconds");


/* Question 3-
Program to search for a element in a array of strings. */
var array = ["shubham", "maheshwari","AMU", "final","year"];
var result = array.includes("mca");
 console.log(result);


/* Question 4-
Program to display only elements containing 'a' in them from a array. */
var arr =["sdfghjkl","zxcvbnm","shubham", "maheshwari","AMU", "final","year"];
for(var i=0 ; i<arr.length; i++){
if(arr[i].includes("a")){
    console.log(arr[i]);
}
}


/* Question 5-
Print an array in reverse order. */
var rray = ["shubham","maheshwari","is","a","good","person"];
var res = rray.reverse();
console.log(res);