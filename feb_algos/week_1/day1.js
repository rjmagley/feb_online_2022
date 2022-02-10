// Rotate Array
// two arguments - an array to rotate (arr) and the number of units right
// to rotate it by (shiftBy)
// ([1, 2, 3, 4, 5], 1) results in [5, 1, 2, 3, 4]
// ([1, 2, 3, 4, 5], 2) results in [4, 5, 1, 2, 3]
// ([1, 2, 3, 4, 5], 6) results in [5, 1, 2, 3, 4]

// .pop(), .shift(), .splice() - don't use these

// FIRST: discuss the problem and make sure the group understands what
// you're expecting - write some psuedocode, diagram it out
// THEN: write out and test your function; come up with your own test cases
// FINALLY: can your function handle a negative shiftBy argument?
// what if you give it a shiftBy in the millions?
// is your code clear and easily readable? is it formatted well?

function rotateArr(arr, shiftBy) {
    shiftBy = shiftBy % arr.length;
    if (shiftBy < 0) {
        shiftBy = arr.length + shiftBy;
    }

    while (shiftBy > 0) {
        // console.log("shifting array one to the right");
        // shift by one unit to the right
        var temp = arr[arr.length - 1];
        for (var i = arr.length-1; i >= 0; i--) {
            arr[i] = arr[i-1];
        }
        arr[0] = temp;
        shiftBy -= 1;
    }

    return arr;
}

// console.log(rotateArr(['hello', 'good morning', 'hey', 'how goes it', 'Guten Tag'], 2))
// should print out ['how goes it', 'Guten Tag', 'hello', 'good morning', 'hey']
console.log(rotateArr([1, 2, 3, 4, 5, 6, 7, 8, 9], -2))
console.log(rotateArr([1, 2, 3, 4, 5, 6, 7, 8, 9], -5))
console.log(rotateArr([1, 2, 3, 4, 5, 6, 7, 8, 9], -6))