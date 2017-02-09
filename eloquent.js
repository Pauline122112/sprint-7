//1: Minimum- Write a function min that takes two arguments and returns their minimum.

// Your code here.
function min (number1, number2){
  return Math.min (number1, number2);

}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//2:Recursion- Define a recursive function isEven corresponding to this description The function should accept a number parameter and return a Boolean.

// Your code here.

function isEven(num){
  if (num === 0){
    return true;
}
else if(num ===1){
  return false;
}
  return isEven(num -2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//3:Bean Counting- Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string. Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

// Your code here.
function countBs(string){
  return countChar(string, 'B');
}
function countChar(string, letter){
  var num = 0;

  for(var i = 0; i < string.length; i += 1){
    if(string[i] === letter){
      num += 1;
    }
  }
  return num;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
