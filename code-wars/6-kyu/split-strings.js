// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  var result = [];
  for (var i = 0; i < str.length; i += 2) {
    if (i + 1 < str.length) {
      result.push(str[i] + str[i + 1]);
    } else {
      result.push(str[i] + '_');
    }
  }
  return result;
}

console.log(solution('abc'))
console.log(solution('abcdef'))