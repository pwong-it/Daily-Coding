// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
  let hasUpperCase = /[A-Z]/.test(string)
  let chars = string.split('')
  let charsArr = []

  if (!hasUpperCase) {
    return string
  } else {
    chars.forEach((char, index) => {
      if (char !== char.toUpperCase()) {
        charsArr.push(char)
      } else {
        charsArr.push(' ', char)
      }
    })
  }
  return charsArr.join('')
}