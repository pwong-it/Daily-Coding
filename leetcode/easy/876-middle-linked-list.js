// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// take the head arr and divide the length by 2
// if head.length/2 % 1 === 0, midIndex = (head.length/2) + 1
// else midIndex = Math.floor(head.length/2)
// return head.slice(midIndex)

var middleNode = function (head) {
  if (head.length / 2 % 1 === 0) {
    var midIndex = head.length / 2
  } else {
    var midIndex = Math.floor(head.length / 2)
  }
  let output = head.slice(midIndex)
  return output
};


console.log(middleNode([1, 2, 3, 4, 5]))
console.log(middleNode([1, 2, 3, 4, 5, 6]))