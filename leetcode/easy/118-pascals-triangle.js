// Given an integer numRows, return the first numRows of Pascal's triangle.

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

// Input: numRows = 5
// Output: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1], [1,5,10,10,5,1], [1,6,15,20,15,6,1], [1,7,21,35,35,21,7,1]], [1,8,28,56,70,56,28,8,1], [1,9,36,84,126,126,84,36,8,1]


// input is between 1 to 30
// numRows determines how many arrays in the nested array(outputArr)
// 

//PLAN
// Funtion with 
// Input: Number between 1 and 30
// Output: Nested array - Each array will contain 1 more number than the last. 
// Idea - forEach so I can push into an existing arr. 

// Pattern = the number you are calculating is the sum of the number with the same index value + the number less 1 of the index value from the row above. 
// 

function generate(numRows) {
  let output = []

  for (let i = 1; i <= numRows; i++) {
    if (i === 1) {
      output.push([1])
    } else if (i === 2) {
      output.push([1, 1])
    } else {
      let eachArr = []
      for (let j = 1; j <= i; j++) {
        if (j === 1) {
          eachArr.push(1)
        }
        if (j > 1 && j < i) {
          eachArr.push(output[i - 2][j - 1] + output[i - 2][j - 2])
        }
        if (j === i) {
          eachArr.push(1)
          output.push(eachArr)
        }
      }
    }
  }

  return output
};



// console.log(generate(3));
console.log(generate(6));
// console.log(generate(8));
// console.log(generate(12));