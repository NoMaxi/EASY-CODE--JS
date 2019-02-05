console.log('prototype. classes\n'.toUpperCase());

// 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
// }
// Пример вызова:
// const comp = new Component('span');
class Component {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
}

const comp = new Component('span');
console.log('1. New component comp: ', comp);

// 2. Реализовать конструктор в ES6 синтаксисе:
// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
// }
// Component.prototype.setText = function (text) {
//     this.node.textContent = text;
// };
class Component2 {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }

    setText(text) {
        this.node.textContent = text;
    }
}

const comp2 = new Component2('span');
comp2.setText('I\'m a new span');
console.log('2. New component comp2: ', comp2);

// 3. Создать класс калькулятора, который будет принимать стартовое значение и у него будут методы
// сложить, вычесть, умножить, разделить. Также у него должы быть геттер и сеттер для получения
// и установки текущего числа, с которым производятся вычисления.
class Calculator {
    constructor(initialValue) {
        this._value = initialValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (!isNumber(newValue)) return 'ERROR! Please enter a number as argument';
        this._value = newValue;
        return this;
    }

    add(addend = 0) {
        if (!isNumber(addend)) return 'ERROR! Please enter a number as argument';
        this._value += addend;
        return this;
    }

    subtract(subtrahend = 0) {
        if (!isNumber(subtrahend)) return 'ERROR! Please enter a number as argument';
        this._value -= subtrahend;
        return this;
    }

    multiply(multiplier = 1) {
        if (!isNumber(multiplier)) return 'ERROR! Please enter a number as argument';
        this._value *= multiplier;
        return this;
    }

    divide(divisor = 1) {
        if (!isNumber(divisor)) return 'ERROR! Please enter a number as argument';
        this._value /= divisor;
        return this;
    }
}

const calc = new Calculator(10);
calc.add(5);
calc.multiply(2);
console.log(`3.1 Results of using methods of calc instance of Calculator class:
   const calc = new Calculator(10);
   calc.add(5); // ${calc.value}
   calc.multiply(2); // ${calc.value}
   calc.value: ${calc.value}.`);

calc.value = 50;
calc.subtract(100);
calc.divide(10);
calc.value;

console.log(`3.2 Results of using methods of calc instance of Calculator class:
   calc.value = 50;
   calc.subtract(100); // ${calc.value}
   calc.divide(10); // ${calc.value}
   calc.value: ${calc.value}.`);


function isNumber(...values) {
    return values.every(elem => typeof elem === 'number');
}


console.log('\nAJAX\n'.toUpperCase());

// 1. Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com
// используя класс созданный на занятии. Получив ответ от сервера вывести имена
// пользователей на страницу. При клике на имя пользователя в произвольном месте
// должна появиться подробная информация о нем. Для визуальной части можно
// использовать bootstrap или другие фреймворки.
class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }

    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}

const httpClient = new CustomHttp();

httpClient.get('https://jsonplaceholder.typicode.com/todos', (response) => {
    console.log(JSON.parse(response));
});


