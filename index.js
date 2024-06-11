const wordJSON = require("./words.json");

// console.log(wordJSON);

function allWords() {
    return wordJSON;
}

// console.log(allWords);

function firstTenWords() {
    const firstTen = wordJSON.slice(0, 10)
    console.log(firstTen);
}
// firstTenWords(wordJSON);

function nextTenWords() {
    console.log(wordJSON.slice(10, 20));
}

// nextTenWords(wordJSON);

function firstXWord(x) {
    console.log(wordJSON.slice(0, x))
}

// firstXWord(3);

function subsetOfWords(x, y) {
    console.log(wordJSON.slice(x, y));
}

// subsetOfWords(7, 77);

function sortWords() {
    console.log(wordJSON.sort())
}

sortWords()