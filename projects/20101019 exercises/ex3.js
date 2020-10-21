const { reverse } = require("dns");

const isPalindrome = (string) => {
    const prep = string.replace(/[^A-Za-z0-9]/g, ``).toLowerCase();
    prepLength = prep.length;

    let result = ``;
    for (i = 0; i< prepLength; i++) {
        result = string[prepLength-i].join();
        i++;
    }
    console.log(result);
    // if (prep === prep.reverse()){ console.log('true')};
    // console.log(prep);
    // return prep;
}

isPalindrome("Hello! How are you????");