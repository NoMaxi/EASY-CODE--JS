console.log('promises. fetch\n'.toUpperCase());

// 1. Создать функцию, которая возвращает промис.  Функция принимает два аргумента
// - время, через которое промис должен выполниться, и значение, с которым промис
// будет выполнен.
// function promiseCreator(...) {...}
// const prom = promiseCreator(500, 'Ok!');
// prom.then(console.log); // Ok!

/**
 * after a delay returns a promise which resolves with entered value
 * @param {Number} delay time interval after which the promise will be executed
 * @param {String} value the value passed to the promise resolve callback
 * @returns {Promise<any>} the returned promise
 */
function promiseCreator(delay, value) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(value);
        }, delay);
    });
}

const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);

// 2. Создать класс, который производит экземпляр со следующими свойствами:
//     - promise - промис, который создается во время запуска конструктора;
//     - reject - метод, при выполнении которого promise реджектится;
//     - resolve - метод, при выполнении которого promise резолвится.
// class Prom {...}
// const inst = new Prom();
// inst.promise.then(data => console.log(data));
// inst.resolve('test'); // →  test

class Prom {
    constructor() {
        this.promise = new Promise((res, rej) => {
            // create method that resolves the promise with entered value
            this.resolve = res;
            // create method that rejects the promise with entered reason (error)
            this.reject = rej;
        });
    }
}

const inst = new Prom();
inst.promise.then(data => console.log(data));
inst.resolve('test');
