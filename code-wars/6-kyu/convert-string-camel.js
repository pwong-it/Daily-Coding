// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  if (str === '') {
    return ''
  }

  let arr = str.split(/-|_/)
  let newArr = []
  newArr.push(arr[0])

  for (var i = 1; i < arr.length; i++) {
    if (arr[i][0] === arr[i][0].toLowerCase()) {
      newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr.join('')
}