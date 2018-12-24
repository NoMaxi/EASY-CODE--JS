let string = 'some test string';

// Heading of the first section concerning strings
console.log('\nstrings\n'.toUpperCase());

// 1. Получить первую и последнюю буквы строки
let firstLetter = string[0],
    lastLetter = string[string.length - 1];
console.log(`1. The first letter of the string '${string}': '${firstLetter}', the last letter of the string '${string}': '${lastLetter}'.`);

// 2. Сделать первую и последнюю буквы в верхнем регистре
let firstLetterUpper = firstLetter.toUpperCase(),
    lastLetterUpper = lastLetter.toUpperCase();
console.log(`2. The first letter of the string '${string}' in upper case: '${firstLetterUpper}', the last letter of the string '${string}' in upper case: '${lastLetterUpper}'.`);

// 3. Найти положение слова ‘string’ в строке
let stringIndex = string.indexOf('string'),   // numbers of symbol indexes begin from 0
    stringPosition = stringIndex + 1;         // numbers of symbol positions begin from 1
console.log(`3. The index of the word 'string' in the string '${string}': ${stringIndex}.
   The position of the word 'string' in the string '${string}': ${stringPosition}.`);

// 4. Найти положение второго пробела (“вручную” ничего не считать)
let firstSpaceIndex = string.indexOf(' ');
let secondSpaceIndex = string.indexOf(' ', firstSpaceIndex + 1), // numbers of symbol indexes begin from 0
    secondSpacePosition = secondSpaceIndex + 1;    // numbers of symbol positions begin from 1
console.log(`4. The index of the second space in the string '${string}': ${secondSpaceIndex}.
   The position of the second space in the string '${string}': ${secondSpacePosition}.`);

// 5. Получить строку с 5-го символа длиной 4 буквы
let startSymbolPos = 5,
    susbstrLength = 4,
    startSymbolIndex = startSymbolPos - 1;
let substrString = string.substr(startSymbolIndex, susbstrLength);
console.log(`5. The string that begins from the 5-th symbol of the string '${string}' and has length of 4 symbols: '${substrString}'.`);

// 6. Получить строку с 5-го по 9-й символы
let endSymbolPos = 9;
// No need to subtract 1 from endSymbolPos because the String.substring() method doesn't include end index, and we need to include it
let substringString = string.substring(startSymbolIndex, endSymbolPos);
console.log(`6. The string derived from the 5-th to 9-th symbol of the string '${string}': '${substringString}'.`);

// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)
let sliceString = string.slice(0, -6);
console.log(`7. The new string derived from the string '${string}' without last 6 symbols: '${sliceString}'.`);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”
let a = 20,
    b = 16;
let stringA = a.toString(),
    stringB = b.toString();
let resultString = stringA + stringB;
console.log(`8. The string obtained from variables a = 20 and b = 16: '${resultString}'.`);

// Heading of the second section concerning numbers
console.log('\nnumbers\n'.toUpperCase());

// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
let pi = Math.round(Math.PI * 100) / 100;
console.log(`1. PI-number rounded to 2 decimal places: ${pi}.`);

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
let numbers = [15, 11, 16, 12, 51, 12, 13, 51];
let minNumber = Math.min(...numbers),
    maxNumber = Math.max(...numbers);
console.log(`2. Minimum number from the sequence 15, 11, 16, 12, 51, 12, 13, 51: ${minNumber}.
   Maximum number from the sequence 15, 11, 16, 12, 51, 12, 13, 51: ${maxNumber}.`);

// 3. Работа с Math.random:
// 3. a. Получить случайное число и округлить его до двух цифр после запятой
let decimalPlaces = 2,
    multiplier = Math.pow(10, decimalPlaces),
    randomRoundedNumber = Math.round(Math.random() * multiplier) / multiplier;

// 3. b. Получить случайное целое число от 0 до X. X - любое произвольное число.
let min = 0,    // minimum number value
    max = 10;   // maximum number value - X in task condition
let randomNumber = (min - 0.5) + Math.random() * ((max + 0.5) - (min - 0.5)),
// -0.5 is subtracted from min and +0.5 is added to max to equalize the probability of minimum and maximum values with interjacent values
    randomIntegerNumber = Math.round(randomNumber);
console.log(`3. a. Random number rounded to 2 digits: ${randomRoundedNumber}.
   b. Random integer number from ${min} to ${max}: ${randomIntegerNumber}.`);

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let firstNum = 0.6,
    secondNum = 0.7,
    sum = 1.3,
    firstNumDecimalPlaces = firstNum.toString().split('.')[1].length,
    secondNumDecimalPlaces = secondNum.toString().split('.')[1].length,
    maxDecimalPlaces = Math.max(firstNumDecimalPlaces, secondNumDecimalPlaces),
    numMultiplier = Math.pow(10, maxDecimalPlaces);
let firstNumMultiplied = firstNum * numMultiplier,
    secondNumMultiplied = secondNum * numMultiplier,
    sumCalculated = (firstNumMultiplied + secondNumMultiplied) / numMultiplier;
console.log(`4. The result of evaluating the expression ${firstNum} + ${secondNum} === ${sum}: ${sumCalculated === sum}.`);

// 5. Получить число из строки ‘100$’
let numString = '100$';
let number = parseFloat(numString);
console.log(`5. The number got from a string '${numString}': ${number}.`);