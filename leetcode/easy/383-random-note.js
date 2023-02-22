// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"  => "a", "b"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "daba" => dba
// Output: true


// Needs a nested loop.
// turn magazine into magazineArr
// loop through ransomNote. Nest loop magazine. If i === j, magazineArr.pop(j), else return false
// return true if loop is completed.

// var canConstruct = function (ransomNote, magazine) {
//   let magazineArr = magazine.split('')

//   if (ransomNote.length > magazine.length) {
//     return false
//   }

//   for (let i = 0; i < ransomNote.length; i++) {
//     for (let j = 0; j < magazineArr.length; j++) {
//       console.log(i, ransomNote[i], j, magazineArr[j])
//       if (ransomNote[i] === magazineArr[j]) {
//         magazineArr.splice(j, 1)
//         break
//       } else if ((j + 1) === magazineArr.length) {
//         return false
//       }
//     }
//   }
//   return true
// };

var canConstruct = function (ransomNote, magazine) {
  let magazineArr = magazine.split('')

  if (ransomNote.length > magazine.length) {
    return false
  }

  for (let i = 0; i < ransomNote.length; i++) {
    for (let j = 0; j < magazineArr.length; j++) {
      // console.log(i, ransomNote[i], j, magazineArr[j])
      if (ransomNote[i] === magazineArr[j]) {
        magazineArr.splice(j, 1)
        break
      } else if ((j + 1) === magazineArr.length) {
        return false
      }
    }
  }
  return false
};

// console.log(canConstruct('a', 'b'))
// console.log(canConstruct('aa', 'ab'))
// console.log(canConstruct('aaa', 'aba'))
// console.log(canConstruct('aa', 'aab'))
// console.log(canConstruct('aa', 'daba'))
console.log(canConstruct('abc', 'ab'))
// console.log(canConstruct('bg', 'efjbdfbdgfj'))