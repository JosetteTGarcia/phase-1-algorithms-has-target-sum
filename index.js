// function hasTargetSum(array, target) {
// for (let i = 0; i < array.length; i++){
//   for (let j = i + 1; j < array.length; j++){
//     if (array[j] === target){
//       return true
//     } else {
//       return false
//     }
//   }
// }
// }

function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}


/* 

explain problem:
Our function needs to compare all numbers in our array to the target number. 
We need to then add each number to itself and other numbers in the array, 
if any of them added together equal the target, we return true
otherwise, return false
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

  hahTargetSum(array, target)
{ for (every item in array)
    add it to the other numbers in the array
    if i + j === target  
      return true
    if i + j !== target 
      return false

}
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
