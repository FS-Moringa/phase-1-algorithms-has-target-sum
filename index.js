function hasTargetSum(array, target) {
  // Write your algorithm here
  const passedNumbers = new Set(); // initialize empty array
  for (const number of array) {
    const complement = target - number;

    // returns true if the Set includes the complement
    if (passedNumbers.has(complement)) return true;

    // adds the number to the Set
    passedNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  
  Big O time complexity: O(n) - Linear time complexity - the number of elements in the array is the number of operations performed on each element
  
*/

/* 
  Add your pseudocode here
    1. Initialize an empty Set
    2. Loop through the array
    3. Get the complement of the current number
    4. Check if the Set includes the complement
    5. If it does, return true
    6. If it doesn't, add the number to the Set
    7. Return false
*/

/*
  Add written explanation of your solution here
  The solution is to loop through the array and check if the complement of the current number is in the Set. If it is, return true. If it isn't, add the number to the Set.



  
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
