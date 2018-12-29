console.log('\nobjects\n'.toUpperCase());

let obj = {
    product: 'iphone'
};
obj.price = 1000;
obj.currency = 'dollar';
obj.details = {
    model: 'XR',
    color: 'black'
};
console.log(`obj =`, obj); // printing obj keys and properties to console


console.log('\nprimitives coercion. part 1\n'.toUpperCase());
// Чему равны переменные a,b,c,d,e,f почему?

// In all tasks number type coercion occurs
let a = 0 || 'string';
console.log(a); // 'string'
// a evaluates to 'string' because 0 converts to false and 'string' converts to true - ||-operator stops on true ('string')

let b = 1 && 'string';
console.log(b); // 'string'
// b evaluates to 'string' because 1 converts to true and 'string' converts to true - &&-operator stops on false (no false here, so stops on the last operand)

let c = null || 25;
console.log(c); // 25
// c evaluates to 25 because null converts to false and 25 converts to true - ||-operator stops on true (25)

let d = null && 25;
console.log(d); // null
// d evaluates to null because null converts to false (no need to check 25) - &&-operator stops on false (null)

let e = null || 0 || 35;
console.log(e); // 35
// e evaluates to 35 because null converts to false, 0 converts to false and 35 converts to true - ||-operator stops on true (35)

let f = null && 0 && 35;
console.log(f); // null
// f evaluates to null because null converts to false (no need to check 0 and 35) - &&-operator stops on false (null)

console.log('\nprimitives coercion. part 2\n'.toUpperCase());
// Что отобразится в консоли? Почему?
// 12 + 14 + '12'
// 3 + 2 - '1'
// '3' + 2 - 1
// true + 2
// +'10' + 1
// undefined + 2
// null + 5
// true + undefined

console.log(12 + 14 + '12'); // 2612
// The type of the first (12) and the second (14) operands is Number so type coercion doesn't occur and they are arithmetically added (the result of addition is 26).
// The type of the first and the second operands sum is Number and the type of the third operand is String. So string coercion occurs and 26 converts to string '26' (because of the '+' sign between operands).
// After that two strings ('26' and '12') are concatenated with the result of string '2612'.

console.log(3 + 2 - '1'); // 4
// The type of the first (3) and the second (2) operands is Number so type coercion doesn't occur and they are arithmetically added (the result of addition is 5).
// The type of the first and the second operands sum is Number and the type of the third operand is String. So numeric coercion occurs and the third operand ('1') converts to number 1 (because of the '-' sign between operands).
// After that number 1 is subtracted from number 5 (the result of subtraction is 4).

console.log(true + 2); // 3
// The type of the first operand (true) is Boolean and the type of the second operand (2) is Number. So numeric coercion occurs and the first operand converts to number 1.
// After that two numbers (1 and 2) are arithmetically added (the result of addition is 3).

console.log(+'10' + 1); // 11
// The type of the first operand ('10') is String and it is directly converted to Number by means of unary operator '+' which is located before the operand.
// As the result of numeric coercion the first operand converts to number 10.
// After that two numbers (10 and 1) are arithmetically added (the result of addition is 11).

console.log(undefined + 2); // NaN
// Numeric coercion occurs here. Undefined converts to NaN. The result of addition of NaN and 2 is NaN.

console.log(null + 5); // 5
// Numeric coercion occurs here, null converts to 0. The result of addition of two numbers (0 and 5) is 5.

console.log(true + undefined); // NaN
// The type of the first operand (true) is Boolean and the type of the second operand (undefined) is Undefined.
// Because of the different operands types numeric coercion occurs: true converts to 1 and undefined converts to NaN.
// The result of addition of 1 and NaN is NaN.


console.log('\nif else conditions\n'.toUpperCase());

// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let visibility = 'hidden';
console.log(`1. Initial value - visibility: ${visibility}.`);
if (visibility === 'hidden') {
    visibility = 'visible';
} else {
    visibility = 'hidden';
}
console.log(`   Final value - visibility: ${visibility}.`);

// 2. Используя if, записать условие:
//     a. если переменная равна нулю, присвоить ей 1;
//     b. если меньше нуля - строку “less then zero”;
//     c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let number = '125';
if (number === 0) {
    number = 1;
} else if (number < 0) {
    number = 'less then zero';
} else {
    number *= 10;
}
console.log(`2. The result of comparing number variable with zero: ${number}.`);

// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
//     Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};
if (car.age > 5) {
    console.log('3. Need repair.');
    car.needRepair = true;
} else {
    car.needRepair = false;
}
console.log(`   car = `, car, `\n   The final value of needRepair property of car object: ${car.needRepair}.`);

// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
//     Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
};
if (item.discount) {
    // no need to use if('discount' in item && item.discount) because the result of if(item.discount) meets the conditions of the task
    item.priceWithDiscount = `${parseFloat(item.price) * (1 - parseFloat(item.discount) / 100)}$`;
    console.log(`4. item = `, item, `\n   The value of priceWithDiscount property of item object: ${item.priceWithDiscount}.`);
} else {
    console.log(`4. item = `, item, `\n   The value of priceWithDiscount property of item object: ${item.price}.`);
}

// 6. Дан следующий код:
// let product = {
//    name: “Яблоко”,
//    price: “10$”
// };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена
// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
let product = {
   name: 'Яблоко',
   price: '10$'
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
if (parseFloat(product.price) >= min && parseFloat(product.price) <= max) {
    console.log(`6. The name of product that meets the specified price conditions: ${product.name}.`);
} else {
    console.log('6. No products found.')
}