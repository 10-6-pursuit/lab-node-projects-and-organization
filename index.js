console.log("Welcome to my app!");
const wordJSON = require("./words.json")

// allWords logs all the words.
function allWords() {
    console.log(wordJSON)
}

// allWords()

// firstTenWords logs the first ten words.
function firstTenWords() {
    console.log(wordJSON.slice(0,10))
}

// firstTenWords()

// nextTenWords logs the next 10 words.
function nextTenWords() {
    console.log(wordJSON.slice(10,20))
}

// nextTenWords()

// firstXWords logs from 0 to x words.
function firstXWords(x) {
    console.log(wordJSON.slice(0, x))
}

// firstXWords(3)

// subsetOfWords logs from x to y words.
function subsetOfWords(x, y) {
    console.log(wordJSON.slice(x, y))
}

// subsetOfWords(5,7)

// sortWords logs all the words, sorted alphabetically.
function sortWords(words) {
    return words.sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
  };

// console.log(sortWords(wordJSON))

// wordsWithQ returns all the words that contain the letter q
function wordsWithQ(arr) {
    return arr.filter(word => word.includes("q"))
}

// console.log(wordsWithQ(wordJSON))

// findWordsWithLetter takes an argument letter and returns all the words with that matching letter
function findWordsWithLetter(letter) {
    return wordJSON.filter(word => word.includes(letter))
}

// find a word with the matching letter
function findAWordWithLetter(letter) {
    return wordJSON.find(word => word.includes(letter))
}

// find a word with more than one of the matching letter
function findAWordWithLetters(letter) {
    return wordJSON.find(word => word.split("").filter(let => let !== letter).length < 4)
}

// find a word with no matching letters
function findWordWithNoLetter(letter) {
    return wordJSON.find(word => !word.includes(letter))
}


// console.log(findWordWithNoLetter(process.argv[2]))


// The wordle solver requires two functions:

// One that returns a list of words that has matching letters in any position
// One that returns a list of words that has matching letters that also match the position