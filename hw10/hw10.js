console.log('closures\n'.toUpperCase());

// 1. Создайте функцию которая бы умела делать
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.
/**
 *
 * @param {Number} minuend
 * @returns {Function}
 */
function minus(minuend = 0) {
    return function (subtrahend = 0) {
        return isNumber(minuend, subtrahend) ? minuend - subtrahend : 'ERROR! Please enter numbers as arguments';
    }
}

console.log(`1. Results of subtraction of functions' arguments: 
   minus(10)(6): ${minus(10)(6)};
   minus(5)(6): ${minus(5)(6)};
   minus(10)(): ${minus(10)()};
   minus()(6): ${minus()(6)};
   minus()(): ${minus()()}.`);

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function MultiplyMaker ...
// const multiply = MultiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)
/**
 *
 * @param {Number} multiplicand
 * @returns {Function}
 */
function multiplyMaker(multiplicand = 1) {
    return function (multiplier = 1) {
        return isNumber(multiplicand, multiplier) ? multiplicand *= multiplier : 'ERROR! Please enter numbers as arguments';
    }
}

const multiply = multiplyMaker(2);
console.log(`2. Results of multiplication of functions' arguments:
   multiply = multiplyMaker(2);
   multiply(2): ${multiply(2)};
   multiply(1): ${multiply(1)};
   multiply(3): ${multiply(3)};
   multiply(10): ${multiply(10)}.`);

// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5
/**
 *
 * @type {{getStringLength, reverseString, setString, getString}}
 */
const stringProcessor = (function () {
    let str = '';

    function setString(value = '') {
        if (typeof value !== 'string' && typeof value !== 'number') return 'ERROR! Please enter a string or number as argument';
        str = value.toString();
    }

    function getString() {
        return str;
    }

    function getStringLength() {
        return str.length;
    }

    function reverseString() {
        return str.split('').reverse().join('');
    }

    return {
        setString,
        getString,
        getStringLength,
        reverseString
    }
}());

stringProcessor.setString('abcde');
console.log(`3. Results of using methods of stringProccesor module:
   stringProcessor.setString('abcde');
   stringProcessor.getString(): ${stringProcessor.getString()};
   stringProcessor.getStringLength(): ${stringProcessor.getStringLength()};
   stringProcessor.reverseString(): ${stringProcessor.reverseString()}.`);

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень.
// Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
/**
 *
 * @type {{add, getValue, setValue, subtract, pow, divide, multiply}}
 */
const calc = (function () {
    let value = 0;

    function setValue(newValue = value) {
        if (!isNumber(newValue)) return 'ERROR! Please enter a number as argument';
        value = newValue;
        return this;
    }

    function getValue() {
        value = Math.round(value * 100) / 100;
        console.log(`4. Current value is ${value}`);
        return value;
    }

    function add(addend = 0) {
        if (!isNumber(addend)) return 'ERROR! Please enter a number as argument';
        value += addend;
        return this;
    }

    function subtract(subtrahend = 0) {
        if (!isNumber(subtrahend)) return 'ERROR! Please enter a number as argument';
        value -= subtrahend;
        return this;
    }

    function multiply(multiplier = 1) {
        if (!isNumber(multiplier)) return 'ERROR! Please enter a number as argument';
        value *= multiplier;
        return this;
    }

    function divide(divisor = 1) {
        if (!isNumber(divisor)) return 'ERROR! Please enter a number as argument';
        value /= divisor;
        return this;
    }

    function pow(power = 1) {
        if (!isNumber(power)) return 'ERROR! Please enter a number as argument';
        value = Math.pow(value, power);
        return this;
    }

    return {
        setValue,
        add,
        subtract,
        multiply,
        divide,
        pow,
        getValue
    }
}());

calc.setValue(10);
calc.add(5);
calc.multiply(2);
console.log(`4.1. Results of using methods of calc module:
   calc.setValue(10);
   calc.add(5);
   calc.multiply(2);
   calc.getValue(): ${calc.getValue()}.`);
console.log(`4.2. Value after applying a chain of methods:
   calc.setValue(10).pow(2).getValue(): ${calc.setValue(10).pow(2).getValue()}.`);


console.log('\nconstructors\n'.toUpperCase());

// 1. Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает марку, и
// второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2014 (2016-2);
// Марка машины всегда должна возвращаться с большой буквы!
/**
 *
 * @param {String} brand
 * @param {Number} age
 * @constructor
 */
function Car(brand, age) {
    // Print error to console right after instance of Car creation in the case if arguments of inappropriate types are entered
    if (!isString(brand)) console.log('1. ERROR! Incorrect brand input.');
    if (!isNumber(age)) console.log('1. ERROR! Incorrect age input.');

    this.getBrand = function () {
        if (!isString(brand)) return 'ERROR! Brand must be a string';
        return brand.toUpperCase();
    };

    this.getProductionYear = function () {
        if (!isNumber(age)) return 'ERROR! Age must be a number';
        return new Date().getFullYear() - age;
    };
}

const lexus = new Car('lexus', 2);
console.log(`1. Brand of the car: ${lexus.getBrand()}.
   Production year of the car: ${lexus.getProductionYear()}.`);

// 2. Написать конструктор, который умеет элементарно шифровать строки (например, сделать из 
// строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой 
// другой метод). Конструктор при инициализации получает строку и имеет следующие методы:
//     a. показать оригинальную строку
//     b. показать зашифрованную строку
// Строки не должны быть доступны через this, только с помощью методов.
/**
 *
 * @param {String} str
 * @constructor
 */
function StringEncrypter(str) {
    if (!isString(str)) console.log('2. ERROR! Incorrect string input.');

    this.getInitialString = function () {
        if (!isString(str)) return 'ERROR! The input value must be a string';
        return str;
    };

    this.getEncryptedString = function () {
        if (!isString(str)) return 'ERROR! The input value must be a string';
        let encryptedStr = '';
        for (let char of str) {
            encryptedStr += `${char.charCodeAt(0)} `;
        }
        return encryptedStr.trim();
    };
}

const str = new StringEncrypter('I study Javascript');
console.log(`2. Initial string: ${str.getInitialString()}.
   Encrypted string: ${str.getEncryptedString()}.`);


function isNumber(...values) {
    return values.every(elem => typeof elem === 'number');
}

function isString(...values) {
    return values.every(elem => typeof elem === 'string');
}
