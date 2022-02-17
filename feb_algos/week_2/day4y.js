function longestPalindrome(input) {
    if (input.length == 0) {
        return "";
    }

    // if input length is 1
    if (input.length == 1) {
        return input;
    }

    let result = input[0]; //just in case we find nothing but a single,
    // character, like an input of "abcdefghijklmnop"

    for (var i = 0; i < input.length; i++) {
        var left = 0;
        var right = 0;
        //determine if we have a string of idential characters in the middle
        //i.e. a trivial palindrome, such as: "tttttt"
        // in the string "qwerttttttreqwerewy"
        while (input[i + 1 + right] == input[i]) {
            right++;
        }


        //now check for non-trivial palindromes
        while (input[i - 1 - left] == input[i + 1 + right]) {
            if (input[i - 1 - left] === undefined && input[i + 1 + right] === undefined) {
                //special case here - if the next character to the left and to the
                // right are undefined, we have the entire string -
                // the entire string is a palindrome! we can just return the input
                return input;
            }
            left++;
            right++;
        }
        //we have a potential longest palindrome -
        //check it against the current longest
        potential = input.slice(i - left, i + right + 1);
        console.log(potential);
        if (potential.length > result.length) {
            result = potential;
        }
    }

    return result;
}

console.log(longestPalindrome("I like aca to drive tt e the raceeeeecar extremely faaast eeeeeeeeeeeeeeeeeeeeeeee")) //"e racecar e"