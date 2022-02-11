// Deduplicate Sorted Array

// Objectives

// Get more familiarity with for loops and arrays
// Think about for loops in more interesting ways

// Implement deduplicateSortedArray(arr), a function that accepts one argument: an array of items (arr). This array of items could be numbers or strings, but not both. The important thing to note is that the array is guaranteed to be sorted - you don't need to do it manually, you can assume that input will be in sorted order.
// The function's output will be the same array, but with all duplicate items in it removed. For example, if your input was [0, 0, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 6], your expected output would be [0, 1, 2, 3, 4, 5, 6] - essentially, each item should only be in the array once. You very specifically want to do this in-place - you modify the array you're given. You can return that array if you want, but it's not necessary.

// Once you complete the function: are there other ways to do it? (Hint: there are definitely other ways to do it.) Try writing out another solution with your group. Is one more readable than the other? Is one more efficient? 

// function deduplicateSortedArray(arr) {
//     var dict = {};
//     for (var i = 0; i < arr.length; i++){
//         if (!dict[arr[i]]){
//             dict[arr[i]] = 1;
//         }
//         else{
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//     console.log(dict);
//     return arr;
// }

// function deduplicateSortedArray(arr) {
//     for (var i = 0; i < arr.length; i++){
//         while (arr[i] == arr[i + 1]){
//             arr.splice(i, 1); 
//         }
//     }
// }

function deduplicateSortedArray(arr) {
    var dupes = 0;
    // comments would be nice
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            dupes++;
        } else {
            arr[i - dupes] = arr[i];
        }
    }
    arr.length -= dupes;
    return arr;
}

// Things to consider:
// There are lots of ways of solving this problem - if your group has multiple passionate people, you may get bogged down in deciding which solution to pursue. There's merit in trying to find the best course of action before beginning a task, but overthinking and overplanning is a risk. Remember that a good, working solution that runs and is demonstratable is better than a perfect solution that exists only in your head.

let test_a = [0, 1, 1, 1, 2, 5, 5, 8, 9, 9, 10, 12, 12, 12];
deduplicateSortedArray(test_a);
console.log(test_a); // returns [0, 1, 2, 5, 8, 9, 10, 12]
// let test_b = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 6, 6, 6, 7, 7, 7, 7, 7];
// deduplicateSortedArray(test_b);
// console.log(test_b); // returns [0, 1, 2, 3, 6, 7]
// let test_c = [];
// deduplicateSortedArray(test_c);
// console.log(test_c); // returns []
// let test_d = [5, 6, 8, 9];
// deduplicateSortedArray(test_d);
// console.log(test_d); // returns [5, 6, 8, 9]