const words = require("./words.json")

function allWords() {
    console.log(words);
}

function firstTenWords() {
    console.log(words.slice(0,10))
}

function nextTenWords() {
    console.log(words.slice(10,20));
}

function firstXWords(x) {
    console.log(words.slice(0,x));

}

function subsetOfWords(x, y) {
    console.log(words.slice(x, y+1));
}

function sortWords() {
    console.log(words.sort());
}

allWords();
firstTenWords();
nextTenWords();
firstXWords(3);
subsetOfWords(1,6);
sortWords();