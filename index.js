const data = require(`./words.json`);

function allWords() {
  console.log(data);
}
function firstTenWords() {
  return data.slice(0, 10);
}
function nextTenWords() {
  console.log(data.slice(10, 20));
}
function firstXWords(x) {
  return data.slice(0, x);
}
function subsetOfWords(x, y) {
  console.log(data.slice(x, y));
}
function sortWords() {
  console.log(data.sort());
}

function wordsWithQ() {
  return data.filter((el) => el.includes(`q`));
}
function findWordsWithLetter(letter) {
  return data.filter((el) => el.includes(letter));
}


function lettersMatch(l1, l2, l3, l4, l5) {
  return firstTenWords().filter(
    (el) =>
      el.includes(l1) ||
      el.includes(l2) ||
      el.includes(l3) ||
      el.includes(l4) ||
      el.includes(l5)
  );
}
allWords()
firstTenWords()
nextTenWords()
firstXWords(5)
subsetOfWords(5,10)
sortWords()
console.log(wordsWithQ())
console.log(findWordsWithLetter(`l`))



console.log(lettersMatch(process.argv[2],process.argv[3],process.argv[4],process.argv[5],process.argv[6]))


