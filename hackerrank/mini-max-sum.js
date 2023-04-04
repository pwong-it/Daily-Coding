let arr = [1, 2, 3, 4, 5]


function miniMaxSum(arr) {
  let arrSorted = arr.sort()
  let minSum = 0
  let maxSum = 0

  for (let i = 0; i < 4; i++) {
    minSum = minSum + arrSorted[i]
  }

  for (let j = 1; j < arr.length; j++) {
    maxSum = maxSum + arrSorted[j]
  }

  console.log(`${minSum} ${maxSum}`)
}

console.log(miniMaxSum(arr))