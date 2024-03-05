// Note: Recursive functions must have a base case when they return
//  without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    // Only change code below this line
  if (n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
    // Only change code above this line
  }