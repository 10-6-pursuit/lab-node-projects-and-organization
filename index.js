const words = require("./words.json");

const allWords = () => console.log(words);

const firstTenWords = () => console.log(words.filter((x, i) => i < 10));

const nextTenWords = () => console.log(words.filter((x, i) => i > 9 && i < 20));

const firstXWords = x => console.log(words.filter((ele, i) => i >= 0 && i < x));

const subsetOfWord = (x, y) => console.log(words.filter((ele, i) => i >= x && i <= y));

const sortWords = () => console.log(words.sort((a, b) => {
    if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else return 0;
}));

const wordsWithQ = () => words.filter(word => word.split("").some(letter => letter.toLocaleLowerCase() === "q"));

const findWordsWithLetter = inputLetter => words.filter(word => word.split("").some(letter => letter.toLocaleLowerCase() === inputLetter.toLocaleLowerCase()));

const lettersMatch = letters => words.filter(word => word.split("").some(letter => {
    for(let l of letters){
        if(letter.toLocaleLowerCase() === l.toLocaleLowerCase()){
            return true;
        }
    }
}))

// OUTPUT
// allWords();
// firstTenWords();
// nextTenWords();
// firstXWords();
// subsetOfWord();
// sortWords();
// console.log(wordsWithQ());
// console.log(findWordsWithLetter(process.argv[2]));
// console.log(lettersMatch(process.argv[2]));



