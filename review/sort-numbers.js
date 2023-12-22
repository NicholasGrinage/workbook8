const numbers = [23, 56, 78, 11, 44, 89, 33, 67, 7, 92];
//comparing adjacent elements in the array to see whether they need swapped and then swapping if needed
numbers.sort((a, b) => a - b);
console.log(numbers);