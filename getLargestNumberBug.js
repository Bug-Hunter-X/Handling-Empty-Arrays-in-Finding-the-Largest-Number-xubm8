function getLargestNumber(numbers) {
  if (!numbers || numbers.length === 0) {
    return undefined; // Handle empty array
  }

  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

//Example
const numbers = [1, 5, 2, 8, 3];
const largestNumber = getLargestNumber(numbers);
console.log("Largest number:", largestNumber); // Output: Largest number: 8

const emptyArray = [];
const resultForEmptyArray = getLargestNumber(emptyArray);
console.log("Largest number for empty array:", resultForEmptyArray); //Output: Largest number for empty array: undefined