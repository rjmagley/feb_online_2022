// function addToFront(arr, value) {
//     arr[arr.length] = value
//     for(var i = arr.length -1; i > 0; i--){
//         arr[i] = arr[i-1]
//     }
//     arr[0] = value
// }

// function addMultipleToFront(arr, values) {
//     for (var i = values.length - 1; i >=0; i--) {
//         addToFront(arr, values[i])
//     }
// }

function addMultipleToFront(arr, values) {
    for (var i = arr.length - 1; i >=0; i--) {
        arr[i + values.length] = arr[i];
    }
    for (var i = 0; i < values.length; i++) {
        arr[i] = values[i];
    }
}

function removeMultipleFront(arr, count) {
    console.log(count);
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i+count];
    }
    arr.length -= count;
}

let x = [1, 2, 3, 1, 2, 3];

addMultipleToFront(x, [4, 5, 6])

console.log(x);

removeMultipleFront(x, 3);

console.log(x);