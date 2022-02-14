// reverseString(str) - takes in one argument, a String. return that String, Reversed
// "Hello, world!" becomes "!dlrow ,olleH"
// do this without turning the string into an array - there's no need!

function reverseString(str) {
    let output = "";
    for(var i = str.length-1; i >= 0; i--){
        output += str[i]       
    }
    return output;
}

console.log(reverseString("Hello") == "olleH");
console.log(reverseString("12345") == "54321");
console.log(reverseString("I like to pet cats!") == "!stac tep ot ekil I");

// createAcronym(str) - takes in one argument, a string to create an acronym from (str).
// an acronym is a word made up of a letter from the start of each word of a phrase.
// do this also without turning the string into an array - it's not necessary.
// try to capitalize each letter as well, but if you don't it's not critical -
// easy to do afterwards
// "I like to pet cats!" should result in "ILTPC"