// The Fibonacci numbers are the numbers in the following integer sequence (Fn):
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
// such as
// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:
// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod you will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// Some Examples of Return:
// (depend on the language)

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 
// -----
// productFib(714) # should return {21, 34, 1}, 
// productFib(800) # should return {34, 55, 0},        
// -----
// productFib(714) # should return {21, 34, true}, 
// productFib(800) # should return {34, 55, false}, 

// Create a Fib array
// Test if can access array

function fib(index) {
  if (index < 2) {
    return index
  }

  let prev = 0
  let curr = 1
  for (let i = 2; i <= index; i++) {
    const next = prev + curr
    prev = curr
    curr = next
  }
  return curr
}


function productFib(prod) {
  for (let n = 0; n < 100; n++) {
    if (fib(n) * fib(n + 1) === prod) {
      return [fib(n), fib(n + 1), true]
    } else if (fib(n) * fib(n + 1) < prod && prod < fib(n + 1) * fib(n + 2)) {
      return [fib(n + 1), fib(n + 2), false]
    }
  }
}

console.log(productFib(4895))
console.log(productFib(5895))
console.log(productFib(74049690))
console.log(productFib(84049690))
console.log(productFib(193864606))
console.log(productFib(447577))
console.log(productFib(602070))