const wordJSON = require("./words.json")

function allWords(){
    return wordJSON;
}

function firstTenWords(words) {
    const firstTen = words.slice(0, 10)
    console.log(firstTen)
}

function nextTenWords(){
    console.log(wordJSON.slice(10,20))
}

function firstXWords(x){
    console.log(wordJSON.slice(0,x))
}

function subsetOfWords(x,y){
    console.log(wordJSON.slice(x,y))
}

function sortWords(words){
    return words.sort();
}