var test_array2 = [9, 0, 4, 6, 4, 1, 2, -7, 8];

// once you get that done, you can use it to implement selectionSort

function selectionSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        
        let smallestIndex = i;

        for (var j = i; j < arr.length; j++) {
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j;
            }
        }

        var temp = arr[i];
        arr[i] = arr[smallestIndex];
        arr[smallestIndex] = temp;
    }
}

selectionSort(test_array2);
console.log(test_array2); // should return [-7, 0, 1, 2, 4, 4, 6, 8, 9]