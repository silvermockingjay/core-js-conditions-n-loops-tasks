/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) return true;
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = 0;
  if (a > b && a > c) {
    max = a;
  } else if (b > a && b > c) {
    max = b;
  } else {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let isoscelesTriangle = false;
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && a !== c) {
      isoscelesTriangle = true;
    } else if (a === c && a !== b) {
      isoscelesTriangle = true;
    } else if (b === c && b !== a) {
      isoscelesTriangle = true;
    }
  }
  return isoscelesTriangle;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let number = num;
  let roman = '';
  while (number > 0) {
    if (number < 4) {
      roman += 'I';
      number -= 1;
    } else if (number === 4) {
      roman += 'IV';
      number -= 4;
    } else if (number >= 5 && number < 9) {
      roman += 'V';
      number -= 5;
    } else if (number === 9) {
      roman += 'IX';
      number -= 9;
    } else if (number >= 10) {
      roman += 'X';
      number -= 10;
    }
  }
  return roman;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let ans = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    if (i > 0) ans += ' ';
    switch (numberStr[i]) {
      case '0':
        ans += 'zero';
        break;
      case '1':
        ans += 'one';
        break;
      case '2':
        ans += 'two';
        break;
      case '3':
        ans += 'three';
        break;
      case '4':
        ans += 'four';
        break;
      case '5':
        ans += 'five';
        break;
      case '6':
        ans += 'six';
        break;
      case '7':
        ans += 'seven';
        break;
      case '8':
        ans += 'eight';
        break;
      case '9':
        ans += 'nine';
        break;
      case '-':
        ans += 'minus';
        break;
      case ',':
      case '.':
        ans += 'point';
        break;
      default:
        ans += 'No match';
    }
  }
  return ans;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverse += str[i];
  }
  if (str === reverse) return true;
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      index = i;
      break;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numberStr = String(num);
  const digitStr = String(digit);
  for (let i = 0; i < numberStr.length; i += 1) {
    if (numberStr[i] === digitStr) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) return -1;
  let balance = -1;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 1; i < arr.length - 1; i += 1) {
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    for (let j = i + 1; j < arr.length; j += 1) {
      rightSum += arr[j];
    }
    if (leftSum === rightSum) {
      balance = i;
      break;
    } else {
      leftSum = 0;
      rightSum = 0;
    }
  }
  return balance;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = new Array(size);
  for (let i = 0; i < size; i += 1) {
    arr[i] = new Array(3);
  }

  let startCol = 0;
  let startRow = 0;
  let endCol = size - 1;
  let endRow = size - 1;
  let number = 1;

  while (number <= size ** 2) {
    for (let i = startCol; i <= endCol; i += 1) {
      arr[startRow][i] = number;
      number += 1;
    }
    startRow += 1;

    for (let i = startRow; i <= endRow; i += 1) {
      arr[i][endCol] = number;
      number += 1;
    }
    endCol -= 1;

    for (let i = endCol; i >= startCol; i -= 1) {
      arr[endRow][i] = number;
      number += 1;
    }
    endRow -= 1;

    for (let i = endRow; i >= startRow; i -= 1) {
      arr[i][startCol] = number;
      number += 1;
    }
    startCol += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = matrix;
  let numOfSquares = matrix.length / 2;
  if (!numOfSquares.isInteger) {
    numOfSquares = Math.floor(numOfSquares);
  }

  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix.length - 1;

  for (let k = 0; k < numOfSquares; k += 1) {
    let endRowSq = endRow;
    let endColSq = endCol;

    for (let i = startCol; i < endCol; i += 1) {
      const x = newMatrix[i][endCol];
      newMatrix[i][endCol] = newMatrix[startRow][i];
      const y = newMatrix[endRow][endColSq];
      newMatrix[endRow][endColSq] = x;
      const z = newMatrix[endRowSq][startCol];
      newMatrix[endRowSq][startCol] = y;
      newMatrix[startRow][i] = z;
      endColSq -= 1;
      endRowSq -= 1;
    }
    startRow += 1;
    endRow -= 1;
    startCol += 1;
    endCol -= 1;
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function partArray(array, start, end) {
    const list = array;
    let pivotIndex = Math.floor((end + start) / 2);
    const pivotElement = arr[pivotIndex];
    for (let i = start; i <= end; i += 1) {
      if (list[i] > pivotElement && i < pivotIndex) {
        const index = pivotIndex;
        const element = list[i];
        list[i] = pivotElement;
        list[index] = element;
        pivotIndex = i;
      }
      if (list[i] < pivotElement && i > pivotIndex) {
        const element = list[i];
        list[i] = list[pivotIndex + 1];
        list[pivotIndex + 1] = element;
        list[pivotIndex] = element;
        list[pivotIndex + 1] = pivotElement;
        pivotIndex += 1;
      }
    }
    return pivotIndex;
  }

  function quickSort(list, start, end) {
    if (start < end) {
      const pivotIndex = partArray(list, start, end);
      quickSort(list, start, pivotIndex - 1);
      quickSort(list, pivotIndex + 1, end);
    }
    return list;
  }

  return quickSort(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let word = str.split('');
  for (let i = 0; i < iterations; i += 1) {
    const shuffle = [];
    let startEven = 0;
    const numberOfEven = Math.ceil(word.length / 2);
    let startOdd = numberOfEven;
    for (let j = 0; j < word.length; j += 1) {
      if (j % 2 === 0 && startEven < numberOfEven) {
        shuffle[startEven] = word[j];
        startEven += 1;
      }
      if (j % 2 !== 0 && startOdd < word.length) {
        shuffle[startOdd] = word[j];
        startOdd += 1;
      }
    }
    word = shuffle;
  }
  let res = '';
  for (let i = 0; i < word.length; i += 1) {
    res += word[i];
  }
  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const num = String(number);
  let left;
  let right;
  for (let i = num.length - 1; i >= 0; i -= 1) {
    if (num[i - 1] < num[i]) {
      left = i - 1;
      break;
    }
  }

  let min = Number(num[left + 1]);
  let oldMin = min;
  right = left + 1;
  for (let i = left + 1; i < num.length; i += 1) {
    if (num[i] > num[left]) {
      min = Math.min(min, Number(num[i]));
      if (min !== oldMin) right = i;
      oldMin = min;
    }
  }

  const arr = [];
  for (let i = 0; i < num.length; i += 1) {
    arr.push(num[i]);
  }

  const elem = arr[left];
  arr[left] = arr[right];
  arr[right] = elem;

  for (let i = left + 2; i < arr.length; i += 1) {
    const key = arr[i];
    let j = i - 1;

    while (j >= left + 1 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }

  let res = '';
  for (let i = 0; i < arr.length; i += 1) {
    res += arr[i];
  }

  return Number(res);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
