console.log('\nternary operator. switch case\n'.toUpperCase());

// 1. Записать в виде switch case следующее условие:
//     if (a === ‘block’) {
//          console.log(‘block’);
//     } else if (a === ‘none’) {
//          console.log(‘none’);
//     } else if (a === ‘inline’) {
//          console.log(‘inline’);
//     } else {
//          console.log(‘other’);
//     }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
let a = 'inline';
switch (a) {
    case 'block':
        console.log('1. block');
        break;
    case 'none':
        console.log('1. none');
        break;
    case 'inline':
        console.log('1. inline');
        break;
    default:
        console.log('1. other');
        break;
}

// 2 Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.
// 2.1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let visibility = 'hidden';
console.log(`2.1. Initial value - visibility: ${visibility}.`);
visibility = visibility === 'hidden' ? 'visible' : 'hidden';
console.log(`     Final value - visibility: ${visibility}.`);

// 2.2. Используя if, записать условие:
//     a. если переменная равна нулю, присвоить ей 1;
//     b. если меньше нуля - строку “less then zero”;
//     c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let number = '125';
number = number === 0 ? 1 : number < 0 ? 'less then zero' : number *= 10;
console.log(`2.2. The result of comparing number variable with zero: ${number}.`);

// 2.3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
//     Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};
car.needRepair = car.age > 5 ? true : false; // can be simplified to: car.needRepair = car.age > 5;
console.log(`2.3. car = `, car, `\n     The final value of needRepair property of car object: ${car.needRepair}.`);

console.log('\nloops\n'.toUpperCase());

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.
let string = 'i am in the easycode',
    newString = '';
for (let i = 0; i < string.length; i++) {
    newString += i === 0 || string[i - 1] === ' ' ? string[i].toUpperCase() : string[i];
}
console.log(`1. The new string obtained from the string '${string}': '${newString}'.`);

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
let str = 'tseb eht ma i',
    newStr = '';
for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
}
console.log(`2. The reversed '${str}' string: '${newStr}'.`);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for (*loop type was changed from for...of to for 30.12.18 by Denys Mescheryakov through Telegram*).
// 3.1. Factorial calculation using for loop
let n = 10,
    factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
// or: for (let i = n; i > 0; i--) { factorial *= i; }
console.log(n < 0 ? `3.1. Incorrect number input.` : `3.1. The factorial of number ${n} (using for loop): ${factorial}.`);

// 3.2. Factorial calculation using for...of loop
let num = 10,
    numArray = [],
    factorialNum = 1;
// forming an array of integer numbers 1 to num inclusive
for (let index = 0, i = 1; i <= num; index++, i++) {
    numArray[index] = i;
}
for (let value of numArray) {
    factorialNum *= value;
}
console.log(num < 0 ? `3.2. Incorrect number input.` : `3.2. The factorial of number ${num} (using for...of loop): ${factorialNum}.`);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
let jsString = 'JavaScript is a pretty good language',
    newJsString = '';
for (let i = 0; i < jsString.length; i++) {
    if (jsString[i] !== ' ') {    // can be written inline without curly brackets but becomes hard to read
        newJsString += i === 0 || jsString[i - 1] === ' ' ? jsString[i].toUpperCase() : jsString[i];
    }
}
console.log(`4. The new string obtained from the string '${jsString}': '${newJsString}'.`);

// 5. Найти все нечетные числа от 1 до 15 включительно и вывести их в консоль. Использовать цикл for of.
let startNum = 2,
    endNum = 15,
    numberArray = [];
// forming an array of odd numbers from range [startNum; endNum] - no need to add all integer numbers to array (getting smaller array and less iterations number)
for (let i = 0, number = startNum % 2 === 1 ? startNum : startNum + 1; number <= endNum; i++, number += 2) {
    numberArray[i] = number;
}
for (let value of numberArray) {
    console.log(`5. ${value}`);
// if an array of all integer numbers from range [startNum; endNum] was formed the next code should be executed: if (value % 2 === 1) console.log(`5. ${value}`);
}

// 6. Дан объект: let list = { name: ‘denis’, work: ‘easycode’, age: 29 }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
};
console.log(`6. Initial object: list =`, list);
for (let key in list) {
    if (typeof list[key] === 'string') list[key] = list[key].toUpperCase();
}
console.log(`   Final object: list =`, list);