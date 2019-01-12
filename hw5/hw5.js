console.log('\nhigher order functions\n'.toUpperCase());

// 1. Создать две функции и дать им осмысленные названия:
//    - первая функция принимает массив и колбэк (одна для всех вызовов)
//    - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
// Первая функция возвращает строку “New value: ” и результат обработки:
//  firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
//  firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
//  firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
//  “New value: Jhon is 45, Aaron is 20,”
//  firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
// Подсказка: secondFunc должна быть представлена функцией, которая принимает
//  один аргумент (каждый элемент массива) и возвращает результат его обработки
function convertArrayToString(array, handler) {
    if (!array.length) return '1. ERROR! Invalid data input - please enter an array';

    let string = '';
    array.forEach(function (elem) {
        string += handler(elem);
    });

    // making the result string have a "correct" ending - without ", " at the end
    if (string.endsWith(', ')) string = string.slice(0, -2);
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

    return string ? `1. New value: ${string}` : `1. ERROR! Incorrect data input!`;
}

//  firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
function handler1(elem) {
    // if it's known for sure that there is only one word (string) in the array element:
    return typeof elem === 'string' ? elem[0].toUpperCase() + elem.slice(1) : '';
    // type check allows a higher order function to loop to the next array element without throwing an error if the element type is not a string

    // callback function that is independent of the number of words (strings separated with spaces) in the array element:
    // let resString = '';
    // for (let i = 0; i < elem.length; i++) {
    //     resString += i === 0 || elem[i - 1] === ' ' ? elem[i].toUpperCase() : elem[i];
    // }
    // return resString;
}

console.log(convertArrayToString(['my', 'name', 'is', 'Trinity'], handler1));

//  firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
function handler2(elem) {
    return typeof elem === 'number' ? `${elem * 10}, ` : '';
}

console.log(convertArrayToString([10, 20, 30], handler2));

//  firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) → “New value: Jhon is 45, Aaron is 20,”
function handler3(elem) {
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    return typeof elem === 'object' && Object.keys(elem).length ? `${elem.name} is ${elem.age}, ` : '';
}

console.log(convertArrayToString([{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}], handler3));

//  firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
function handler4(elem) {
    return typeof elem === 'string' ? `${elem.split('').reverse().join('')}, ` : '';
}

console.log(convertArrayToString(['abc', '123'], handler4));

// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.
function every(array, callback) {
    if (!array.length) return 'ERROR! Invalid data input - please enter an array of numbers';

    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) return false;
    }

    return true;
}

function gTH5(elem, index, array) {
    return typeof elem === 'number' ? elem > 5 : false;
}

console.log(`2. All numbers in the array are greater than 5: ${every([56, 32, 8, 3, 20], gTH5)}.`);

console.log('\niteration methods\n'.toUpperCase());

// 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
function getDigitParity(array) {
    if (!array.length) return 'ERROR! Invalid data input - please enter an array';

    // filter method is added by author decision to omit elements that are not numbers - not necessary and is optional according to the task conditions
    return array.filter(function (elem) {
        return typeof elem === 'number' && !isNaN(elem);
    }).map(function (elem) {
        return {digit: elem, odd: elem % 2 === 1};
    });
}

console.log('1. New array containing information about each digit and it\'s parity:\n', getDigitParity([1, 2, 3, 5, 8, 9, 10]));

// 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.
function hasNoZeroElements(array) {
    if (!array.length) return 'ERROR! Invalid data input - please enter an array';

    return array.every(function (elem) {
        return elem !== 0;
    });

    // also can be used:
    // return !array.some(function (elem) {
    //     return elem === 0;
    // });
}

console.log(`2. Entered array does not contain elements that are equal to zero: ${hasNoZeroElements([12, 4, 50, 1, 0, 18, 40])}.`);

// 3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true
function hasStringLongerThan3(array) {
    if (!array.length) return 'ERROR! Invalid data input - please enter an array';

    return array.filter(function (elem) {
    // omitting elements that are not strings
        return typeof elem === 'string';
    }).some(function (elem) {
        return elem.length > 3;
    });
}

console.log(`3. Entered array contains at least one word which length is more than 3 letters: ${hasStringLongerThan3(['yes', 'hello', 'no', 'easycode', 'what'])}.`);

// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
//  {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
//  {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
// строки
function formStringFromArray(array) {
    if (!array.length) return 'ERROR! Invalid data input - please enter an array';

    return array.sort(function (prev, next) {
        return prev.index - next.index;
    }).reduce(function (prev, current) {
        return prev += current.char;
    }, '');
}

const testArr1 = [
    {char: 'a', index: 12},
    {char: 'w', index: 8},
    {char: 'Y', index: 10},
    {char: 'p', index: 3},
    {char: 'p', index: 2},
    {char: 'N', index: 6},
    {char: ' ', index: 5},
    {char: 'y', index: 4},
    {char: 'r', index: 13},
    {char: 'H', index: 0},
    {char: 'e', index: 11},
    {char: 'a', index: 1},
    {char: ' ', index: 9},
    {char: '!', index: 14},
    {char: 'e', index: 7}
];
console.log(`4. A string obtained from entered array of objects: ${formStringFromArray(testArr1)}`);

console.log('\nsort method\n'.toUpperCase());

// 1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
function sortArrayByLength(array) {
    if (!array.length) return 'ERROR! Invalid data input - please enter an array';

    return array.filter(function (elem) {
    // omitting elements that are not arrays
        return Array.isArray(elem);
    }).sort(function (prev, next) {
        return prev.length - next.length;
    });
}

console.log('1. Sorted array of arrays: ', sortArrayByLength([[14, 45], [1], ['a', 'c', 'd']]));

// 2. Есть массив объектов:
//     [
//         {cpu: 'intel', info: {cores:2, сache: 3}},
//         {cpu: 'intel', info: {cores:4, сache: 4}},
//         {cpu: 'amd', info: {cores:1, сache: 1}},
//         {cpu: 'intel', info: {cores:3, сache: 2}},
//         {cpu: 'amd', info: {cores:4, сache: 2}}
//     ]
// Отсортировать их по возрастающему количеству ядер (cores).
function sortArrayByCores(array) {
    if (!array.length) return 'ERROR! Invalid data input - please enter an array';

    return array.filter(function (elem) {
    // omitting elements that are not objects and objects that don't have 'info.cores' property
        return typeof elem === 'object' && 'cores' in elem.info;
    }).sort(function (prev, next) {
        return prev.info.cores - next.info.cores;
    });
}

const testArr2 = [
    {cpu: 'intel', info: {cores:2, cache: 3}},
    {cpu: 'intel', info: {cores:4, cache: 4}},
    {cpu: 'amd', info: {cores:1, cache: 1}},
    {cpu: 'intel', info: {cores:3, cache: 2}},
    {cpu: 'amd', info: {cores:4, cache: 2}}
];
console.log('2. An array sorted by ascending number of cores: \n', sortArrayByCores(testArr2));

// 3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
//     let products = [
//         {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//         {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//         {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//         {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
//     ];
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
function filterCollection(array, minPrice, maxPrice) {
    if (!array.length || typeof minPrice !== 'number' || typeof maxPrice !== 'number') {
        return 'ERROR! Invalid data input - please enter an array of objects and specify minimum and maximum price';
    }

    return array.filter(function (elem) {
        return typeof elem === 'object' && elem.price >= minPrice && elem.price <= maxPrice;
    }).sort(function (prev, next) {
        return prev.price - next.price;
    });
}

const products = [
    {title: 'prod1', price: 5.2},
    {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15},
    {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9},
    {title: 'prod6', price: 8},
    {title: 'prod7', price: 19},
    {title: 'prod8', price: 63}
];
console.log('3. An array filtered and sorted by ascending price:\n', filterCollection(products, 15, 30));

