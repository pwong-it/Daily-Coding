// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// Converting number to roman
// Input is number
// Output is the roman numeral
// declare a key-value of all roman symbols
// Loop through Object keys.
// If number is greater than 

let numToRoman = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I"
}


function solution(number) {
  let output = []
  const romanKeys = Object.keys(numToRoman).reverse()

  for (let i = 0; i < romanKeys.length; i++) {
    while (number >= romanKeys[i]) {
      number -= romanKeys[i]
      output.push(numToRoman[romanKeys[i]])
    }

  }
  return output.join('')
}