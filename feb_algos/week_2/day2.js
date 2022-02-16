// parensValid(str) - takes in one argument, a string. returns true if the
// parentheses in the string are valid and false otherwise.
// "a(z)g" - true
// ")sadf(" - false
// what's valid?
// - no more opening than closing parens and vice versa
// - every opening paren has a matching properly located closing paren
// - we can ignore all non-paren characters

// don't split the string
// return early if possible

function parensValid(str) {

    let parenCount = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] == ')') {
            parenCount -= 1;
            if (parenCount < 0) {
                return false;
            }
        }

        else if (str[i] == '(') {
            parenCount += 1;
        }
        
    }

    return (parenCount === 0);
}

function parensValid2(str){
    // set var
    let temp = [];
        // loop through array
        for(var i = 0; i < str.length ; i++){
            // on target '()' characters
            if (str[i] ==')'&& temp.length == 0){
                return false;
            }
            if(str[i] == '('){
                temp.push(str[i]);
            }
            else if(str[i] == ')'){
                temp.pop(str[i]);
            }
        }
        if(temp.length == 0){
            return true;
        }
        return false;
    }

console.log(parensValid2("hello!") === true);
console.log(parensValid2("a(z)g") === true);
console.log(parensValid2("12;(d-[)](qwg)a") === true);
console.log(parensValid2(")sadf(") === false);
console.log(parensValid2("addToFront(7, [1, 6, 2, 9']") === false);
console.log(parensValid2("(()())(()()()))") === false);

console.log(parensValid2("(5T5ecTajZ2Wv)ytn4zd8B2ydWb3pvvbBvJQ4Bwjqp)8pJct7b2mXRZCARPmFKiHLP9ezyLU8nZ6vqhCfkD2Y4UEqxQM4Tuy6QtZcXENEQKdfCC5VjiY7rdav69fbtrYKhEGqEAy6i65cKKMaZSyEzXvBnvrfM7w8rVFeiudyQcSrxQzfNBUiYRwNnHZEPD7bJqKeHV2NHiuX6hSW79SajgKaj4k5y88LzYNrqbrWYucTATwfHGTaGpPDDPnjK5jC9bkzBTniFupkYN2pgAiGGw3pY6YyFPVRA7PNegDAcAyQBQbHgHwuDvDDSmJ6rZKwdWHWdf2RqpT56Lf77WgQvJkjeyrXFxDKSDQkwhQBxDZScxv82YAwpZAhzzuaD4yHWmPcNf4Be3TbfnAwm4QJPeEgjU4gyDHCBkdHZYKg5ndJ8V2H5rk4u4uZikBpHw5qTTnrYTtyanwPZnXLM7mtmYgaaL33p4Cea6dz4hALhtvpPAbjSGZVc6wa9wdYtxL2qZdV9H7JUtRFAkdLunFvHnZEbqwuDctxNFu4mJZ6fDDgqiqJTYvr5igLPtEuwaCdkMSYSE57Gh5UukTR8aQ9ba7wSywR2TYL5ku9fZJY4qdXngZMMTKbgnQ5CBp4WRThR5LCneZTxTtayuuZimnBpCJvnYdQeRxEvytKtbMZaZz2PQgpujrJXvY43zmh3GrMJU2gJNSwaEmKPNdABCaPmGrSJnnYMiXNYh7gZhfmykwULEMHUc8AUfNfyJyY6FMVBidVeqG33rG4BTuL38VpRE84WT96j65jdcvZzzYwfMRkzak7UdTEG96jGSkpCT9HQgyKZn6nZR5kT7eZeCV2KJDUPC7vCS3dvzcBwbzePYDi4DDFBx4ejpRkiM3rf6bm2Agw7yqvApHTnA5v9K8aGpfMkYpBGaCQE4g8iTwFpYw59C62TjTZ3qXK82rDRHqxrVCxacr7qYU8QgcjzQewUramdavti3S38KpyyQ97tpeNxHNVVjBQknwSgpA3gAHUHL3uU67xA5VUZZqkhmj6BK9tGik2NUyGvrqbvHTk7VmkHNjWPUTjeB7TNUjC9k2ftR6F555chKgZLXFTVQpHQ53ezbFJGRaV8texU5tQ8JuFLRp5ZgTycA8SYHuDcUP3YuMSQ5LT8ShGian83jnmFK44b2BF5tB4GG9HP3KM8H4La9USNyWyqDZmqfBwMMiwmNX2by62arCftpNjiySket4SzgBKrgwER8DePR9S8xpcjZy9mdJ9AkPXX3vfRVmVS74Vadak2Anvi7xaBgXrrzmhbpPKfLmAyC5t2ZDn5gz7BEpt9GkEE4LgaMr74u24nHjnJJddypnPDY2Uyw7pDi3ZUMrp332kVvnBSHZh2UNMbfgvvF6gSdiAqXHdBeCDxcmmDYbfMapdLjGGwSA3jKHDTRzUJWTBFtZkfeJEUAekHtbrRU2JHudCvfixgFP2cRDCcnJSecccLj7q35fYexAZZ4TZkzpJb5QjeZ4vzCrKLdRWXVejzcpp8zKYcEXrtjK2hdygSLnR95WvCe9E9PYQqyNghMpShhVGLnJUjiVSuKZ2TWfFuPDd9GKDcuLK3yHLLirYXE5VGqLfpa4mt7QeztdFqigwTf2wnxyxEXp5zrCXLnicudkuvJNLrxGbpz2tCWQ7jxz6qGLNGypL2Jt3x4mNeYVMBCi42WDc9MjHNDxKg7SuLwW8jKjaExJfAx5qCSXPmzNnaHBMfAQ4dUCy6B5qhSTeNP7YeHUGPYd3W4AdLtHrCrLytfZjKSY827g7phnYQ3uVmxyEmmnjGLnVfqtVHfFdJLkkmBQRkA2BVd4rvecbwQzmGNZ8xewm7wYiVJbFbcVru4xgiKKAT8cbrzg2ui9bWwvafdyNBQdWftKEfuMpMUBkCzqbQhTUxw8NMCS6jRmhVXx3A2grM285yGuNabRTDuPALhr5tzyt66Vu3WjfFWbEUzRUzDv25vyFKAZrTfrfvYUkV2") === false);

console.log(parensValid2("'(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())'") === true);