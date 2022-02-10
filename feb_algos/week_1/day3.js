// bubbleSort, the worst (sane) sorting algortithm!
// not at all efficient, but it's easy to understand
// start from the bottom, compare each item against its neighbor,
// and swap them if they need to be swapped

// function 1
function bubbleSort(arr) {

    let ops = 0;

    for (var i = 0; i < arr.length; i++) {
        ops++;
        for (var j = 0; j < arr.length; j++) {
            ops++;
            if (arr[j] > arr[j + 1]) {
                ops++;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(ops);
}

//function 2
function bubbleSort2(arr) {

    let ops = 0;

    for (var i = 0; i < arr.length; i++) {
        ops++;
        for (var j = 0; j < arr.length - i; j++) {
            ops++;
            if (arr[j] > arr[j + 1]) {
                ops++;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(ops);
}

//function 3
function bubbleSort3(arr) {

    let ops = 0;

    for (var i = 0; i < arr.length; i++) {
        ops++;
        let swapped = false;
        for (var j = 0; j < arr.length - i; j++) {
            ops++;
            if (arr[j] > arr[j + 1]) {
                ops++;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (swapped == false) {
            console.log(ops);
            return undefined;
        }
    }
    console.log(ops);
}

let test_a = [8, 1, 4, 5, 9, 2, 7, 6, 3];
bubbleSort3(test_a);
console.log(test_a); // should display [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function 1: 108
// function 2: 72
// function 3: 67

let test_b = [1, 3, 2, 3, 6, 3, 3, 3, 3, 3, 5, 9, 3];
bubbleSort3(test_b);
console.log(test_b); // should display [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 5, 6, 9]
// function 1: 192
// function 2: 114
// function 3: 60

let test_c = [1, 2, 3, 4, 5, 6, 7, 10, 1, 9];
bubbleSort3(test_c);
console.log(test_c);
// function 2: 73
// function 3: 68

let test_d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
bubbleSort3(test_d);
console.log(test_d);
// function 2: 65
// function 3: 11

// let x = [2, 1, 3, 4, 5];
// let temp = x[0];
// x[0] = x[1];
// x[1] = temp;