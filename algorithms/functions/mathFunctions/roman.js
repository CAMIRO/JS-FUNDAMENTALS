// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript
// Roman Numerals Encoder

// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'

const NUMBER_TYPE = {
    1 : 'unit',
    2: 'ten',
    3: 'hundred',
    4: 'thousand'
}

const UNIT_NUMBERS = {
    1 : 'I',
    2 : 'II',
    3 : 'III',
    4 : 'IV',
    5 : 'V',
    6 : 'VI',
    7 : 'VII',
    8 : 'VIII',
    9 : 'IX'
}

const TEN_NUMBERS = {
    I : 'X',
    V : 'L',
    X : 'C'
}

const HUNDRED_NUMBERS = {
    I : 'C',
    V : 'D',
    X : 'M'
}

function solution(number){
  const box = [...number.toString()]
  const numberLength = [...number.toString()].length

  const unit = UNIT_NUMBERS[box[0]]
  const ten = UNIT_NUMBERS[box[1]]
  const hundred = UNIT_NUMBERS[box[2]]
  const thousand = UNIT_NUMBERS[box[3]]


  const replaceTen = () => unit.replace(/[IVX]/g, match => TEN_NUMBERS[match]);

   
  const replaceHundred = () => unit.replace(/[IVX]/g, match => HUNDRED_NUMBERS[match])


  if(numberLength === 1){
      return UNIT_NUMBERS[number]
  } else if (numberLength === 2){
      let roman = ''

      box[1] > 0 ? roman = replaceTen() + ten : roman = replaceTen()

      return roman

  } else if (numberLength === 3){

      let roman = ''

      box[1] > 0 ? roman = replaceHundred() + replaceTen() : roman = replaceHundred()

      return roman
    
  }
  
}


console.log(solution(130))

