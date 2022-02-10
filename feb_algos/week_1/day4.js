// selectionSort(arr) -  a slightly better sort!
// return the array sorted in-place - don't create a new one

// this sort relies on finding the minimum item in a subsection of the array,
// so try writing another function:
// minIndex(arr, start, end) - returns the index of the smallest item
// found between indexes start and end (inclusive)

function minIndex(arr, start, end) {
    let smallestIndex = start;

    for (var i = start; i <= end; i++) {
        if (arr[i] < arr[smallestIndex]) {
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

var test_array = [9, 0, 4, 6, 4, 1, 2, 7];
console.log(minIndex(test_array, 0, 7)); // should return 1 - 0 is at the first index
console.log(minIndex(test_array, 3, 6)); // should return 5 - 1 is at the fourth index
console.log(minIndex(test_array, 1, 4)); // should return 1 - 0 is still at the first index
console.log(minIndex(test_array, 2, 4)); // should return 2 - 4 is at the second
// index, even though there's another 4 in the range we can settle for the first one

var test_array2 = [9, 0, 4, 6, 4, 1, 2, -7, 8];
console.log(minIndex(test_array2, 0, 7)); // should return 7

// once you get that done, you can use it to implement selectionSort

function selectionSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        var smallestIndex = minIndex(arr, i, arr.length - 1);
        var temp = arr[i];
        arr[i] = arr[smallestIndex];
        arr[smallestIndex] = temp;
    }
}


selectionSort(test_array2);
console.log(test_array2); // should return [-7, 0, 1, 2, 4, 4, 6, 8, 9]