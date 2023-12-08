/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    numbers=numbers.sort((a, b) => a - b).reverse()

    return numbers[0]
    
}

console.log([-3,-12,-1,-7,-2,-4,-5].sort((a, b) => a - b))

module.exports = findLargestElement;