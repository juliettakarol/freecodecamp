// indexOf() can be incredibly useful for quickly checking 
// for the presence of an element on an array. We have defined a
//  function, quickCheck, that takes an array and an element as 
//  arguments. Modify the function 
// using indexOf() so that it returns true if the passed element 
// exists on the array, and false if it does not.

function quickCheck(arr, elem) {
    // Only change code below this line
  return (arr.indexOf(elem) !==-1)? true: false 
    // Only change code above this line
  
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));