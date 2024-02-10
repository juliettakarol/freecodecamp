// Note: There shouldn't be any spaces between 
// the array name and the square brackets, 
// like array [0][0] and even this array [0] [0] 
// is not allowed. Although JavaScript is able to process 
// this correctly, this may confuse other programmers 
// reading your code.

// Using bracket notation select an element from myArray 
// such that myData is equal to 8.

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];