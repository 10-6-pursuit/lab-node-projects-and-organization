const words = require("./words.json");

function allWords() {
  return words;
}

function firstTenWords() {
  return words.splice(0, 10);
}

const nextTenWords = () => {
  let nextArr = [];
  for (let i = 10; i < 20; i++) {
    nextArr.push(words[i]);
  }
  return nextArr;
};

const firstXWords = (x) => words.splice(0, x);

const subsetOfWords = (x, y) => words.splice(x, y);

function sortWords() {
  return words.toSorted();
}

const wordsWithQ = () => words.filter((word) => word.includes("q"));

function findWordsWithLetter(letter) {
  return words.filter((word) => word.includes(letter));
}

console.log(findWordsWithLetter(process.argv[2]));
// console.log(findWordsWithLetter("p"));
