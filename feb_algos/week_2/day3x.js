function bookIndex(input) {
    let output = "";
    for (var i = 0; i < input.length; i++) {
        let temp = i;
        while(input[i]+1 === input[i+1]) {
            i++;
        }
        if (temp == i){
            output += input[temp];
        }
        else  {
            output += input[temp]+'-'+input[i];
        }
        if (i != input.length-1) {
            output+=', '
        }
    }
    return output
}

console.log(bookIndex([1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 17, 18]));
// returns "1-5, 8-12, 15, 17-18"
console.log(bookIndex([1,2,3,4,16,18,21,22,23,24])) // returns "1-4, 16, 18, 21-24"
console.log(bookIndex([332, 476])) // returns "332, 476"
console.log(bookIndex([7, 8, 9, 10, 11])) // returns "7-11"
console.log(bookIndex([2, 7, 8, 9, 10, 11])) // returns "2, 7-11"
console.log(bookIndex([7, 8, 9, 10, 11, 23])) // returns "7-11, 23"
console.log(bookIndex([998]));