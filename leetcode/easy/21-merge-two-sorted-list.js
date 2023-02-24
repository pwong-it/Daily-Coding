// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// combine two arrays
// use sort

var mergeTwoLists = function (list1, list2) {
  [...list1, ...list2].sort((a, b) => a - b)
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
console.log(mergeTwoLists([], [0]))