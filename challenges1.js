//***********************
// Challenge Assessment 1
// ***********************

/*
Functions 
******************
A chunk of code that performs a set action when called, or 'invoked'.

function  hi()   {
    (1)      (2)  (3)
    console.log('HI')
}
1- Keyword 
2- Name of the function, and parenthesis for parameter
3- Curly Brace, where the opperations of our function happens


EXPRESSIONS
****************
var hey = function hi() {
    (1)
    console.log('HI')
}

1- The variable 'hey' is now representative of the function 'hi()'


CALLING FUNCTIONS
*************************
function hi() {
    console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function


PARAMETERS
***********************

function hi(name){
    (1)
    console.log(`Hi ${name}`)
    (2)
}

hi('Autumn');
(3)

1- The parameter(s) we need to take into the function
2- Using string interpolation, we can refer to the parameter we passed
3- This is where we define what the parameter's value will be


FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
    (1)     (2)
    console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


Consice
*********************
let hi = () => console.log('hi');


Block Body
*********************
let hi = () => {
    console.log('hi')
}


let hi = () => {
    return 'hi';
    (1)
};

let newName = hi();
(2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return


*/
// What is a palindrome?  A palindrome is a word that is spelled the same way, both forwards and backwards (i.e. bob, level, tacocat, racecar, etc.).  Notice that each of these words have the same spelling if you reversed the word.
// Using only JavaScript, create a prompt telling the user, "Enter a word to see if it is a palindrome", then create a way to check if the word is in fact a palindrome.  If it is, have JavaScript console.log that their word is a palindrome; if it is not, have JavaScript console.log the opposite.

function checkPalindrome(name) {

let nameInReverse = name.split('').reverse().join('')

if(name.toUpperCase() === nameInReverse.toUpperCase()){
    console.log('palindrome')
} else (console.log('not palindrome'))
}


checkPalindrome('kayak')







//let x  = "string";
//let y = "racecar";

//let check = (checking) => {
  //  let broken = checking.split(" ");
    //for(item in broken) {
      //  for (item2 in broken) {
        //    console.log(item, item2)
        //}
        //if (broken[item] === broken[item2] && !== item2]) {
          //  console.log("not unique")
        //}
   // }
//}

//check(x);




















