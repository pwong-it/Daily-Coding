// Write code to remove duplicates from an unsorted array.

// Example
// Input: [‘a’, ‘c’, ‘1’, ‘2’, ‘2’]
// Output” [‘a’, ‘c’, ‘1’, ‘2’ ]

// pseudo
// Removing any duplicates (if any) and produce the output array without the duplicates
// Assumptions: Assuming duplicate spaces ' ' will also be recognised by the code

// Plan
// Object literal to be used
// Loop through the input array, and each element I would create a new key with value of true
// If there is a duplicate, it would check the same key, if true, then we know 

// Create empty outputArr 
// Loop through input array. 
// Check if outputArr includes element, if not, push element into outputArr
// return outputArr

// let input = ['a', 'c', '1', '2', '2']
// let input = ['a', 'c', '1', '2', '2', '  ', ' ']
// let input = ['a', 'c', '1', '2', '2', 't', 't', 't']

// function removeDuplicate(inputArr) {
//   let outputArr = []
//   for (let i = 0; i < input.length; i++) {
//     if (!outputArr.includes(inputArr[i])) {
//       outputArr.push(inputArr[i])
//     }
//   }
//   return outputArr
// }

// Trying the object literal way 
let input = ['a', 'c', '1', '2', '2']

function removeDuplicate(inputArr) {
  let output = {}
  inputArr.forEach(item => {
    output[item] = true
  })
  return Object.keys(output)
}

console.log(removeDuplicate(input))