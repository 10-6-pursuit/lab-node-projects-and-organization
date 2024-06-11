const wordsJSON = require("./words.json"); //declare variable, relative path to the file
//console.log(wordsJSON);

//logs all the words 
//`words` or `arr` param isn't strictly needed in array function
function allWords(words) {
   return wordsJSON;
}
//console.log(allWords());
/*
output:
[
  'women', 'nikau', 'swack', 'feens', 
  ... 12944 more items
]
*/


//logs the first ten words
const firstTenWords = () => wordsJSON.slice(0, 10);
//console.log(firstTenWords());
/*
output:
[
  'women', 'nikau',//
  'swack', 'feens',
  'fyles', 'poled',
  'clags', 'starn',
  'bindi', 'woops'
]
*/


//logs the next 10 words.
const nextTenWords = () => wordsJSON.slice(10, 20);
//console.log(nextTenWords());
/*
output:
[
  'fanos', 'cabin',
  'souct', 'trass',
  'shoat', 'lefty',
  'durra', 'hypes',
  'junta', 'baisa'
]
*/


//logs from 0 to x words.
const firstXWords = (x) => wordsJSON.slice(0, x);
//console.log(firstXWords(5));
/*
output:
[ 'women', 'nikau', 'swack', 'feens', 'fyles' ]
*/


//logs from x to y words.
const subsetOfWords = (x, y) => wordsJSON.slice(x, y);
//console.log(subsetOfWords(3, 8));
/*
output:
[ 'feens', 'fyles', 'poled', 'clags', 'starn' ]
*/


//logs all the words, sorted alphabetically.
const sortWords = () => {
    return wordsJSON.sort((a, b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
};
//console.log(sortWords());
/*
output:
[ 'aahed', 'aalii', 'aargh', 'aarti',
  ... 12944 more items ]
*/


//wordsWithQ(): Return all the words that contain the letter q
//.sort() Not appropriate for this function. Used for sorting elements within an array based on some criteria defined by a comparison function.

const wordsWithQ = wordsJSON.filter(word => word.includes('q'));
//console.log(wordsWithQ);
/*
output:
[ 'qophs', 'query', 'faqir', 'squit', 'qibla', 'quiff', 'quote',
 ...104 more items
 ]
*/



//findWordsWithLetter(): Takes an argument letter and returns all the words with that matching letter

const findWordsWithLetter = (letter) => {
    return wordsJSON.filter(word => word.includes(letter));
};
//console.log(findWordsWithLetter('q'));
/*
output:
[ 'qophs', 'query', 'faqir', 'squit', 'qibla', 'quiff', 'quote',
 ...104 more items
 ]
*/
//console.log(findWordsWithLetter('a'));
/*
output:
[ 'nikau', 'swack', 'clags', 'starn', 'fanos', 'cabin', 'trass',
 ...5,317 more items
 ]
*/



//find a word with the matching letter (find the first word with the matching letter?)
const findAWordWithLetter = (letter) => {
    return wordsJSON.find(word => word.includes(letter));
};
//console.log(findAWordWithLetter("x"));
//console.log(findAWordWithLetter("q"));



//find a word with more than one of the matching letter
const findWordWithMultipleLetters = (letter) => {
    return wordsJSON.find(word => {
        const count = word.split('').filter(char => char === letter).length;
        return count > 1;
    });
};
//console.log(findWordWithMultipleLetters("e")); // Logs the first word containing more than one 'e'



//find a word with no matching letters
const findWordWithNoLetters = (letter) => {
    return wordsJSON.find(word => !word.includes(letter));
}
//console.log(findWordWithNoLetters("a"));

//Upgrade your functionality
//Instead of hard-coding the value for `findWordsWithLetter`, instead set it up so the user can input a letter from the terminal. The following would test the letter P with the `findWordsWithLetter` function:

//console.log(findWordsWithLetter(process.argv[2]));

//Bonus
//Write a function lettersMatch that lets you input up to 5 letters in any order and returns the words that match the criteria (don't worry about solving for duplicate letters). node index.js aeiou

// const lettersMatch = (letters) => {
//     return wordsJSON.filter(word => {
//         for (const letter of letters) {
//             if (!word.includes(letter)) {
//                 return false;
//             }
//         }
//         return true;
//     });
// };
//const inputLetters = 'acati'.split('');
//const inputLetters = 'aeiou'.split('');
//console.log(lettersMatch(inputLetters));
//console.log(lettersMatch('q', 'k', 'b', 's', 'e'));

//Write a function lettersExactMatch that lets you input a five-character string. Put letters with the exact placement in their place, and put a placeholder like . or _ for unknown letters. node index.js exactly a_ie_
const lettersExactMatch = (letters) => {
    return wordsJSON.filter(word => {
        if (word.length !== letters.length) return false;
        for (let i = 0; i < letters.length; i++) {
            if (letters[i] !== '_' && letters[i] !== '.' && word[i] !== letters[i]) {
                return false;
            }
        }
        return true;
    });
};
//console.log(lettersExactMatch('a_ie_'));
/*
output:
[ 'amies', 'alien', 'abies', 'ariel', 'ajies', 'adieu' ]
*/


//Update the function lettersMatch to handle duplicate letters

const lettersMatch = (letters) => {
    return wordsJSON.filter(word => {
        for (const letter of letters) {
            if (!word.includes(letter)) {
                return false;
            }
        }
        return true;
    });

};
//console.log(lettersMatch('q', 'k', 'b', 'k', 'e'));



//Create a new function that can handle both inputs. 
//One input for matched letters in the wrong position
const lettersWrongPositionMatch = (matchedLettersWrongPosition) => {
    return wordsJSON.filter(word => {
        for (let i = 0; i < matchedLettersWrongPosition.length; i++) {
            const [position, letter] = matchedLettersWrongPosition[i];
            
            if (word[position] === letter) {
                return false;
            }
        }
        return true;
    });
};

//console.log(lettersWrongPositionMatch([[1, 'l'], [4, 'o']])); 



//The second input for matched letters in the correct position. node index.js al__a o

const lettersCorrectPositionMatch = (wordPosition) => {
    const matchedLettersCorrectPosition = [];

    for (let i = 0; i < wordPosition.length; i++) {
        if (wordPosition[i] !== '_') {
            matchedLettersCorrectPosition.push([i, wordPosition[i]]);
        }
    }

    return wordsJSON.filter(word => {
        for (let i = 0; i < matchedLettersCorrectPosition.length; i++) {
            const [position, letter] = matchedLettersCorrectPosition[i];
            
            if (word[position] !== letter) {
                return false;
            }
        }
        return true;
    });
};

//console.log(lettersCorrectPositionMatch('al__a'));

//console.log(lettersCorrectPositionMatch([[1, 'l'], [4, 'o']])); 

// const [wordPosition, correctLetters] = process.argv.slice(2);
// const result = lettersCorrectPositionMatch(wordPosition, correctLetters);

// console.log(result);


/*
.split() method is used to split a string into an array of substrings based on a specified separator and returns the new array.

Syntax:
string.split(separator, limit)

separator (optional): The string or regular expression used to specify where to split the string. If omitted, the entire string will be returned as the only element in the array.

limit (optional): An integer specifying a limit on the number of splits to be found. The result will contain at most limit elements. If limit is omitted or 0, the entire string will be split.

const sentence = 'The quick brown fox jumps over the lazy dog';

const words = sentence.split(' '); // Split by space
console.log(words);
// Output: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const characters = sentence.split(''); // Split by each character
console.log(characters);
// Output: ['T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ...]

const commaSeparated = 'apple,banana,orange';
const fruits = commaSeparated.split(','); // Split by comma
console.log(fruits);
// Output: ['apple', 'banana', 'orange']






.find() method returns the first element in the array that satisfies the provided testing function. If no element satisfies the testing function, it returns `undefined`.



.sort() method sorts the elements of an array in place and returns the sorted array. Sorts elements based on their values and typically arranges them in ascending order by default. A comparison function can be used as an argument. It modifies the original array.

Numbers: When sorting an array of numbers, .sort() compares the elements as strings by default, which can lead to unexpected results.

const numbers = [3, 1, 6, 2, 5];
numbers.sort(); // Sorts numbers in ascending order: [1, 2, 3, 5, 6]

To sort numbers numerically, you should provide a custom comparison function.

numbers.sort((a, b) => a - b); // Result: [1, 2, 10, 30] (Numerical order)

Strings: When sorting an array of strings, .sort() arranges the elements in lexicographic (dictionary) order by default.

const words = ['banana', 'apple', 'cherry'];
words.sort(); // Result: ['apple', 'banana', 'cherry']




.filter() method creates a new array with all the elements that pass the test implemented by the provided function. Does not modify the original array; it returns a new array containing only the elements that meet the condition. The provided function should return `true` to include the elment in the new array or `false` to exclude it.
Strings or Numbers: Whether the elements are strings or numbers, .filter() behaves the same way.

const numbers = [3, 1, 6, 2, 5];
const filteredNumbers = numbers.filter(num => num > 3); // Returns numbers greater than 3: [6, 5]


Notes with Mike:

//logs the first 10 words.
/*
const firstTenWords = (words) => {
    return importedWords.slice(0,9); // not correct because index of 9 tells .slice when to stop cutting, so the returned arrary won't include index 9.
}
//.slice() array method .slice(start cutting at the beginning index, stop cutting at the end index). Makes a copy of a part of an array without modifying the original array. When it returns copy, that copy does not include element that is the end index, only the one before it.
//.slice method returns a shallow copy of a section of an array. The start position is the beginning index of the array; if no start position, then automatically start at 0 index. The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
//mdn - The slice() method is a copying method. It does not alter this but instead return a shallow copy that contains some of the same elements as the ones from the original array. It preserves empty slots.

//const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//const citrus = fruits.slice(1, 3);
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

//online sources- The slice() method extracts a section of the array and returns a new array without modifying the original array. 1st param specifies the index at which to begin the extraction. In JS, array indices start from 0, so `1` refers to the second element("Orange") of the `fruits` array.  The second param(`3`) specifies the index before to which to end the extraction. So, `3` refers to the index of the element after the last element to be extracted, which is "Apple". So, "Apple is not included in the extracted array."
*/

/*
//logs the first ten words
function firstTenWords() {
    return importedWords.slice(0, 10); //starts at zero, ends at index 10. console will print everything from index 0 to 9 because .slice method does not include the second param index which specifies the end of the extraction, in this case index 10.
}

//console.log(firstTenWords());


//logs the next 10 words.
//traditional arrow function - const/let (keyword), declare variable (function name), assigning that block of code to run function (expression). If you don't need a parameter, leave parenthesis empty.
//if block of code is just returning something, (e.g. one-liner), no need for curly brackets. implied return. 
const nextTenWords = () => importedWords.slice(10, 20); //.slice will return shallow copy of elements from index 10 to index 19. 


 //console.log(nextTenWords());

 
 //log from 0 to x words.
 const firstXWords = (x) => importedWords.slice(0, x); //dynamic functions (we don't know what x is). .slice will return everything from index 0 to the element just before index x.

 //console.log(firstXWords(5));

 //logs from x to y words.
 // .slice starts at param of x, and ends at param, does not return the last element in the shallow copy)
 const subsetOfWords = (x, y) => importedWords.slice(x, y); //dynamic function

 //console.log(subsetOfWords(8, 13));



 //.sort method - rearranges elements in a list or array in a specific order (ascending). 
 //.toSorted method return a new collection with the elements sorted.  It would preserve the original collection while providing a sorted version.
 //logs all the words, sorted alphabetically.
 //const sortWords = () => importedWords.toSorted();

//console.log(sortWords());


/*
//JSON file - JavaScript Notation file, a file format used for storing and exchanging data in a structured way. commonly used for configuration files, data storage, and communication between server and client in web apps. 



*/