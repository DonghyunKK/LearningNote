/*

**Bubble sort

Compare adjacent elements in the array and swap the positions if they are not in the intended order.
Repeat the instruction as you step through each element in the array.
Once you step through the whole array with no swaps, the array is sorted.


*Given an array of integers, sort the array.

function bubbleSotr(arr){
  let swapped

  do {
    swapped = false;
    for(let i = 0; i < arr.length - 1; i++){ // we are comparing i and i+1 so we don't need loop till full length of array
      if(arr[i] > arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped)
}

function bubbleSotr(arr){
  for(let i = 0; i < arr.length - 1; i++){
    let temp
    for(let j = 0; j < arr.length - i - 1; j++){ // after every iteration, the last element has been sorted, so -i
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
      }
    }
  }
  return arr
}

Big O = O(n^2);



** Insertion sort

Virtually split the array into a sorted and an unsorted part

Assume that the first element is already sorted and remaining elements are unsorted

Select an unsorted element and compare with all elements in the sorted part

If the elements in the sorted part is smaller than the selected element, proceed to the next
element in the unsorted part. Else, shift larger elements in the sorted part towards the right.

Insert the selected element at the right index

Repeat till all the unsorted elements are placed in the right order

*Given an array of integers, sort the array.

function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j+1] = arr[j]
      j = j - 1
    }
    arr[j+1] = numberToInsert
  }
}

function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let numberToInsert = arr[i];
    for(let j = i - 1; j >= 0 && arr[j] > numberToInsert; j--){
      arr[j+1] = arr[j]
    }
    arr[j+1] = numberToInsert;
  }
  return arr
}

Big O = O(n^2);


*/