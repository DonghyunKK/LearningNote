/*
** Linear Search

* Given an array of 'n' elements and a target element 't', find the index of 't' in the array.
Return -1 if the target element is not found.

arr = [-5, 2, 10, 4, 6], t=10 : should return 2
arr = [-5, 2, 10, 4, 6], t=6 : should return 4
arr = [-5, 2, 10, 4, 6], t=20 : should return -1

* Pseudocode
1. Start at the first element in the array and move towards the last.
2. At each element though, check if the element is equal to the target element.
3. If element is found, return the index of the element.
4. If element is not found, return -1

function linearSearch(arr, target){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target) {
      return i
    }
  }
  return -1
}

Big O = O(n)


** Binary Search

* Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array.
Return -1 if the target element is not found.

*Important note : Binary search only works on the sorted array.

arr = [-5, 2, 4, 6, 10], t=10 : should return 4
arr = [-5, 2, 4, 6, 10], t=6 : should return 3
arr = [-5, 2, 4, 6, 10], t=20 : should return -1

* Pseudocode
1. If the array is empty, return -1 as the element can not be found.
2. If the array has elements, find the middle element in the array. If target is equl to the middle element,
return the middle element index
3. If target is less than the middle element, binary search left half of the array.
4. If target is greater than the middle element, binary search right half of the array.


function binarySearch(arr, target) {
  let leftIndex = 0
  let rightIndex = arr.length - 1 

  while(leftIndex <= rightIndex){
    let middle = Math.floor((leftIndex + rightIndex) / 2); - using Math.floor in order to get the left side ele.
    if(target === arr[middle]){
      return middle
    }
    if(target < arr[middle]){
      rightIndex = middle - 1
    } else {
      leftIndex = middle + 1
    }
  }
  return -1
}

Big O = O(logn) : In every iteration we reduce the input size by half.
*/