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
    return wordJSON.find(word => word.split("").filter(let => let === letter).length > 1)
}

// console.log(findAWordWithLetters(process.argv[2]))
// find a word with no matching letters
function findWordWithNoLetter(letter) {
    return wordJSON.find(word => !word.includes(letter))
}


// console.log(findWordWithNoLetter(process.argv[2]))


// The wordle solver requires two functions:

// One that returns a list of words that has matching letters in any position
function wordsWithLetterInAnyPosition(letter) {
    return wordJSON.filter(word => word.includes(letter)).map(word => {
        indexArray = [] 
        for (let i = 0; i < word.length; i++) {
            if(letter === word[i]) {
                indexArray.push(i)
            }
        }
        return `${word}, position ${[...indexArray]}`
    })
}
// console.log(wordsWithLetterInAnyPosition(process.argv[2]))

// One that returns a list of words that has matching letters that also match the position
function findWordsWithMatchingLettersInPosition(letter, position) {
    if(position > 5 || position <= 0) {
        return "Position must be a number between 1 and 5"
    }
    return wordJSON.filter(word => word[position - 1] === letter)
}

// console.log(findWordsWithMatchingLettersInPosition(process.argv[2], process.argv[3]))

// Bonus

// Write a function lettersMatch that lets you input up to 5 letters in any order and returns the words that match the criteria (don't worry about solving for duplicate letters).
// node index.js aeiou

// Write a function letttersExactMatch that lets you input a five-character string. Put letters with the exact placement in their place, and put a placeholder like . or _ for unknown letters.
// node index.js exactly a_ie_

// function letttersExactMatch (str) {
//     let answer = []
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].match(/[a-z]/g)) {
//             answer = answer.concat(findWordsWithMatchingLettersInPosition(str[i],i + 1)) 
//         }
//     }
//     return answer
// }
// console.log(letttersExactMatch(process.argv[2]))

// Update the function lettersMatch to handle duplicate letters

// Create a new function that can handle both inputs
// One input for matched letters in the wrong position
// The second input for matched letters in the correct position
// node index.js al__a o
