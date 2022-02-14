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

// console.log(reverseString("Hello") == "olleH");
// console.log(reverseString("12345") == "54321");
// console.log(reverseString("I like to pet cats!") == "!stac tep ot ekil I");

// createAcronym(str) - takes in one argument, a string to create an acronym from (str).
// an acronym is a word made up of a letter from the start of each word of a phrase.
// do this also without turning the string into an array - it's not necessary.
// try to capitalize each letter as well, but if you don't it's not critical -
// easy to do afterwards
// "I like to pet cats!" should result in "ILTPC"

function createAcronym(str) {
    let output = "";

    output += str[0];

    for (var i = 0; i < str.length; i++) {
        if (str[i - 1] == ' ') {
            output += str[i];
        }
    }

    return output.toUpperCase();
}

function createAcronym2(str) {
    let output = "";

    let str_array = str.split(' ');
    console.log(str_array);

    let word_array = ['', 'to', 'by', 'of'];

    for (var i = 0; i < str_array.length; i++) {
        if (!word_array.includes(str_array[i])) {
            output += str_array[i][0];
        }
    }

    return output.toUpperCase();
}

console.log(createAcronym2("I like to pet cats!"))
console.log(createAcronym2("I  like   to pet  cats!"))
console.log(createAcronym2("   I  like   to pet  cats!"))

// write some test cases yourself! try and break it.
// bonus: can you create a second version that skips words like "by", "of", etc?
// "light amplification by stimulated emission of radiation" - "laser", "labseor"
// note - you may need to turn the string into an array using some built-ins to
// do this efficiently... but you don't have to