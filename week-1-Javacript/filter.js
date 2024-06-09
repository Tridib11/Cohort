let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = arr.filter((number) => {
  return number % 2 === 0;
});

// Alternatively, using concise arrow function syntax
// const evenNumbers = arr.filter(number => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
