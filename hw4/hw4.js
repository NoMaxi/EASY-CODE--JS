console.log('\nfunctions\n'.toUpperCase());

// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0
function multiply() {
    if (!arguments.length) return 0;

    let multiplication = 1;

    for (let i = 0; i < arguments.length; i++) {
        multiplication *= arguments[i];
    }

    return multiplication ? multiplication : 'ERROR! Invalid arguments input - please enter numbers as arguments';
}

console.log(`1. Multiplication of all input arguments: ${multiply(1, 2, 3, 5)}.`);

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
function reverseString(string) {
    if (typeof string !== 'string') return 'ERROR! Invalid argument input - please enter a string';

    return string.split('').reverse().join('');
}

console.log(`2. Reversed string obtained from string 'test': ${reverseString('test')}.`);

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText(‘hello’) // “104 101 108 108 111”. Подсказка: для получения кода используйте специальный метод
function getCodeStringFromText(string) {
    if (typeof string !== 'string') return 'ERROR! Invalid argument input - please enter a string';

    let codeArray = [];

    for (let i = 0; i < string.length; i++) {
        codeArray.push(string.charCodeAt(i));
    }

    return codeArray.join(' ');
}

console.log(`3. Char code string obtained from input string 'hello': ${getCodeStringFromText('hello')}.`);

// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).
// Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”.
// Числа в строке указаны как пример вы подставляете реальные числа.
function guessNumber(number) {
    if (typeof number !== 'number' || isNaN(number) || number < 1 || number > 10) {
        return '4. ERROR! Invalid argument input - please enter a number from range 1...10';
    }

    let randomIntegerNumber = getRandomIntegerNumber(1, 10);

    function getRandomIntegerNumber(min, max) {
        let randomNumber = (min - 0.5) + Math.random() * ((max + 0.5) - (min - 0.5));
        // -0.5 is subtracted from min and +0.5 is added to max to equalize the probability of minimum and maximum values with interjacent values

        return Math.round(randomNumber);
    }

    return number === randomIntegerNumber ? `4. Вы выиграли!` : `4. Вы не угадали, Ваше число ${number}, а выпало число ${randomIntegerNumber}.`;
}

console.log(guessNumber(8));

// 5. Создать функцию, которая принимает число N и возвращает массив, заполненный числами от 1 до N: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
function getArray(n) {
    if (typeof n !== 'number' || isNaN(n) || n < 1) {
        return 'ERROR! Invalid argument input - please enter a number from range 1...10';
    }

    let numArray = [];

    for (let i = 1; i <= n; i++) {
        numArray.push(i);
    }

    return numArray;
}

console.log(`5. An array filled with numbers from 1 to N: ${getArray(10)}.`);

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива: doubleArray([1,2,3]) // [1,2,3,1,2,3]
function doubleArray(array) {
    if (!Array.isArray(array)) return 'ERROR! Invalid input - please enter an array';
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

    return array.concat(array);
}

const testArray = [1, 2, 3, [4, 5], 'qwerty'];
console.log(`6. Doubled input array: ${doubleArray(testArray)}. Doubled array length: ${doubleArray(testArray).length}.`);

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
function changeCollection() {
    let processedArray = [];

    for (let i = 0; i < arguments.length; i++) {
        if (!Array.isArray(arguments[i])) {
            console.log(`7. ERROR! Argument with index ${i} (${arguments[i]}) is not an array.`);
            continue;
        }

        processedArray.push(arguments[i].slice(1));
    }

    return processedArray;
}
const testArray1 = [1, 2, 3, [5, 8], NaN],
      testArray2 = ['a', 'b', 'c', undefined, 12];
console.log(`7. An array of input arrays with deleted first elements: ${changeCollection(testArray1, testArray2)}. Processed array length: ${changeCollection(testArray1, testArray2).length}.`);

// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями, соответсвующими указанным параметрам.
// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
function funcGetUsers(usersArray, prop, value) {
    // check the case when the input property is 'age' and the type of entered value is 'number' - allows 'age' value input both as a string and as a number
    if (prop === 'age' && typeof value === 'number' && !isNaN(value) && value !== Infinity && value !== -Infinity) {
        value = value.toString();
    }
    if (arguments.length < 3 || !Array.isArray(usersArray) || typeof prop !== 'string' || typeof value !== 'string') {
    // types of arguments are specified according to examples in the task
        return 'ERROR! Invalid arguments input - please enter 3 arguments (1st - array of objects, 2nd - string, 3rd - string or number (for "age" property).';
    }

    let filteredUsersArray = [];

    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i][prop] === value) filteredUsersArray.push(usersArray[i]);
    }

    return filteredUsersArray.length ? filteredUsersArray : 'No match found.';
}

const users = [
    {
        name: 'Denis',
        age: '29',
        gender: 'male'
    },
    {
        name: 'Ivan',
        age: '20',
        gender: 'male'
    },
    {
        name: ' Ann',
        age: '18',
        gender: 'female'
    },
    {
        name: 'John',
        age: '52',
        gender: 'male'
    }
];
console.log('8. An array of objects that match the input data: ', funcGetUsers(users, 'age', 18));