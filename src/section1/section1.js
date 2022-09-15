// Write a script that implements the game “Fizz Buzz” using a language of your choice.

// Counting from 1 to 100, display each number in turn, on a new line.
// * If the number is divisible by 3, or contains the digit 3, display “Fizz”
// * Similarly for 5s, display “Buzz”
// * If both conditions are met display “Fizz Buzz”

//* 25 mins

const divisibleBy = (i, value) => i % value == 0;
const containsNum = (i, value) => i.toString().includes(value);

for (let i = 1; i <= 100; i++) {
  if ((divisibleBy(i, 3) && containsNum(i, 3)) || (divisibleBy(i, 5) && containsNum(i, 5))) {
    console.log(i, "Fizz Buzz");
  } else if (divisibleBy(i, 3) || containsNum(i, 3)) {
    console.log(i, 'Fizz')
  } else if (divisibleBy(i, 5) || containsNum(i, 5)){
    console.log(i, 'Buzz')
  } else {
    console.log(i)
  }
};
