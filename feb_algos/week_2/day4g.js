// isPalindrome(str) -> input is a single string (str). function returns true if
// the input is a palindrome and false otherwise.
// a palindrome is a word or phrase that is the same forwards or backwards
// for this example, capitalization and other punctuation matter
// "racecar" is a palindrome
// "tacocat"
// "raCecar" is not (a capital C is not the same as a lowercase c)
// "raceCar"
// "race car" is not (the space doesn't match up with the E on the opposite side)
// "rac ecar"

function isPalindrome(str) {
    // console.log(`testing string ${str}`);
    for (var i = 0; i < str.length/2; i++) {
        // console.log(`comparing string index ${i} to string index ${str.length - 1 - i}`);
        if (str[i] == str[str.length - 1 - i]) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

function isPalindrome(str) {
    // console.log(`testing string ${str}`);
    for (var i = 0; i < str.length/2; i++) {
        // console.log(`comparing string index ${i} to string index ${str.length - 1 - i}`);
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// what are our test cases?

console.log(isPalindrome("racecar")); // return true
console.log(isPalindrome("raceecar")); // return true
console.log(isPalindrome("raceeeeeeeeeeeeecar")); // return true
console.log(isPalindrome("tacocat")); // return true
console.log(isPalindrome("race car")); // return false
console.log(isPalindrome("e racecar e")); // return true
console.log(isPalindrome("")); // return true
console.log(isPalindrome("a")); // return true
console.log(isPalindrome("123454321")); // return true
console.log(isPalindrome("1234 4321")); // return true
console.log(isPalindrome("znmz")); // return false
