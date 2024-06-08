const words = require('./words.json');

const allWords = () => console.log(words);
const firstTenWords = () => console.log(words.slice(0, 10));
const nextTenWords = () => console.log(words.slice(10, 20));
const firstXWords = (x) => console.log(words.slice(0, x));
const subsetOfWords = (x, y) => console.log(words.slice(x, y));
const sortWords = () => console.log(words.slice().sort());

const findWordsWithLetter = (letter) => console.log(words.filter(word => word.includes(letter)));

const lettersMatch = (letters) => {
  console.log(words.filter(word => {
    for (let letter of letters) {
      if (!word.includes(letter)) return false;
    }
    return true;
  }));
};

const lettersExactMatch = (pattern) => {
  const regex = new RegExp(`^${pattern.replace(/_/g, '.')}$`);
  console.log(words.filter(word => regex.test(word)));
};

const matchLetters = (misplacedLetters, exactPattern) => {
  const misplacedRegex = new RegExp(`[${misplacedLetters}]`, 'g');
  const exactRegex = new RegExp(`^${exactPattern.replace(/_/g, '.')}$`);
  
  console.log(words.filter(word => {
    const matches = word.match(misplacedRegex);
    const misplacedMatch = matches && matches.length === misplacedLetters.length;
    const exactMatch = exactRegex.test(word);
    return misplacedMatch && exactMatch;
  }));
};

const command = process.argv[2];
const input1 = process.argv[3];
const input2 = process.argv[4];

if (command === 'exactly' && input1) {
  lettersExactMatch(input1);
} else if (input1 && input2) {
  matchLetters(input1, input2);
} else if (command) {
  lettersMatch(command);
} else {
  console.log('Please provide valid inputs');
}

// allWords();
// firstTenWords();
// nextTenWords();
// firstXWords(5);
// subsetOfWords(5, 15);
// sortWords();
