// longestPalindrome(str) -> input is a string
// output is the longest palindrome contained within that string
// if you find multiple palindromes of the same length, return the first one
// that you find
// "ehjgkkgeh" -> "gkkg"
// "ehjg kkgeh" -> "kk"
// "qwertttreqwerewy" -> "ertttre"
// "qwerttttttreqwerewy" -> "erttttttre"
// "abacabd" -> "bacab"
// "abacaed" -> "aba"
// "abcde" -> "a" (every character is effectively its own palindrome)
// "a" -> "a" (lol)
// "I like to drive the racecar extremely fast" -> "e racecar e"
// "racecar" -> "racecar" (no need to use the previous function if you don't want to)

function isPalindrome(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[str.length - i - 1]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

function longestPalindrome(str) {
    var longp = "";
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length; j++) {
            count++;
            var substring = str.slice(i, j);
            if (substring.length > longp.length && isPalindrome(substring)) {
                longp = substring
            }
        }
    }
    console.log(count);
    return longp
}

function longestPalindrome2(str) {
    var longp = "";
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        for (var j = str.length; j > i; j--) {
            count++;
            var substring = str.slice(i, j);
            if (substring.length > longp.length && isPalindrome(substring)) {
                longp = substring
            }
        }
    }
    console.log(count);
    return longp
}

console.log("I like to drive the racecar extremely fasttq".length);
console.log(longestPalindrome("I like to drive the racecar extremely fast")) //"e racecar e"
console.log(longestPalindrome("I like to drive the raceeeeeeeeeeeeeeeecar extremely fast")) //"e racecar e"
console.log(longestPalindrome2("I like to drive the racecar extremely fast")) //"e racecar e"