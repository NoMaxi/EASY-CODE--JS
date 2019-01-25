console.log('this. part 1\n'.toUpperCase());

// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};
const rectangle = {
    width: 200,
    height: 100,
    getSquare() {
        return this.width * this.height;
    }
};

console.log(`1. Square of the rectangle with width ${rectangle.width} and height ${rectangle.height}: ${rectangle.getSquare()}.`);

// 2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5
const price = {
    price: 10,
    discount: '15%',
    getPrice() {
        return this.price;
    },
    getPriceWithDiscount() {
        return this.price * (1 - parseFloat(price.discount) / 100);
    }
};

console.log(`2. Product price: ${price.getPrice()}, product price with discount: ${price.getPriceWithDiscount()}.`);

// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
//     object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;
const obj = {
    height: 10,
    increaseHeightByOne() {
        return ++this.height;
    }
};

console.log(`3. Initial height: ${obj.height}.
   Height increased by 1: ${obj.increaseHeightByOne()}.
   Height increased by 1 more: ${obj.increaseHeightByOne()}.`);

// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
//     const numerator = {
//         value: 1,
//         double: function () {...},
//         plusOne: function () {...},
//         minusOne: function () {...},
//     }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3
const numerator = {
    value: 1,
    double() {
        this.value *= 2;
        return this;
    },
    plusOne() {
        ++this.value;
        return this;
    },
    minusOne() {
        --this.value;
        return this;
    }
};

console.log(`4. Initial numerator value: ${numerator.value}.`);
numerator.double().plusOne().plusOne().minusOne();
console.log(`   Numerator value after applying chain of methods: ${numerator.value}.`);


console.log('\nthis. part 2\n'.toUpperCase());

// 1. Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)
const products = {
    price: 100,
    quantity: 50,
    getTotalPrice() {
        return this.price * this.quantity;
    }
};

console.log(`1. Total price of ${products.quantity} products with price ${products.price} per product: ${products.getTotalPrice()}.`);

// 2. Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.
const parts = {
    price: 50,
    quantity: 10
};

console.log(`2. Total price of ${parts.quantity} parts with price ${parts.price} per part: ${products.getTotalPrice.call(parts)}.`);

// 3. Даны объект и функция:
//     let sizes = {width: 5, height: 10},
//         getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes
const sizes = {
    width: 5,
    height: 10
};
const getSquare = function () {
    return this.width * this.height;
};

console.log(`3. Square of the rectangle with width ${sizes.width} and height ${sizes.height}: ${getSquare.call(sizes)}.`);

// 4. let element = {
//      height: 25,
//      getHeight: function () {return this.height;}
//    };
// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined
// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.
let element = {
    height: 25,
    getHeight() {
        return this.height;
    }
};
let getElementHeight = element.getHeight.bind(element);

console.log(`4. Result of the call of getElementHeight function: ${getElementHeight()}.`);


console.log('\narrow functions\n'.toUpperCase());

// 1. Переделать функцию с использов
// анием функции-стрелки (в методе reduce тоже использовать arrow function):
// function sum() {
//    const params = Array.prototype.slice.call(arguments);
//    if (!params.length) return 0;
//    return params.reduce(function (prev, next) { return prev + next; });}
// sum(1, 2, 3, 4); // 10
// sum(); // 0
const sum = (...args) => {
    return args.length ? args.reduce((prev, next) => prev + next) : 0;

    // another solution - more code:
    // const params = Array.prototype.slice.call(args);
    // if (!params.length) return 0;
    // return params.reduce((prev, next) => prev + next);
};

console.log(`1. The sum of all function arguments: ${sum(1, 2, 3, 4)}.
   The result of sum() function when no arguments are passed: ${sum()}.`);

console.log('\ndestructuring assignment\n'.toUpperCase());

// 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает
// любое количество аргументов и возвращает объект, содержащий первый аргумент
// и массив из остатка: func(‘a’, ‘b’, ‘c’, ‘d’) → { first: ‘a’, other: [‘b’, ‘c’, ‘d’] }
function func() {
    const [first, ...other] = arguments;
    return {first, other};
}

console.log('1. Function arguments: ', func('a', 'b', 'c', 'd'));

// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } } и выводит в консоль имя
// (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
// const organisation = {
//      name: 'Google',
//      info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }
// };
// getInfo(organisation);
// Name: Google
// Partners: Microsoft Facebook
function getInfo(company) {
    const {name = 'Unknown', info: {partners: [firstCompany, secondCompany]}} = company;
    console.log(`2. Name: ${name}\n   Partners: ${firstCompany} ${secondCompany}.`);
}

const organisation = {
    name: 'Google',
    info: {
        employees: ['Vlad', 'Olga'],
        partners: ['Microsoft', 'Facebook', 'Xing']
    }
};
getInfo(organisation);
