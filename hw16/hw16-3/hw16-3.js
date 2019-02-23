console.log('oop. task 3\n'.toUpperCase());

// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию”
// (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов
// (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только
// для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера).
// Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

/**
 * ES5 class representing furniture
 * @param {string} name The furniture name
 * @param {number} price The furniture price
 * @constructor
 */
function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

/**
 * Get information about the furniture name and price
 * @returns {string} The string containing the furniture name and price
 */
Furniture.prototype.getInfo = function () {
    return `The ${this.name} price is ${this.price} dollars.`;
};

const officeFurniture = new Furniture('office furniture', 100);
officeFurniture.hasComputerTable = true;

/**
 * Get information about the officeFurniture instance name, price and presence of a computer table
 * @returns {string} The string containing the officeFurniture instance name, price and presence of a computer table
 */
officeFurniture.getInfo = function() {
    return `${Furniture.prototype.getInfo.call(this)} The ${this.name} has a computer table: ${this.hasComputerTable}.`;
};

const homeFurniture = new Furniture('home furniture', 220);
homeFurniture.hasBed = true;

/**
 * Get information about the homeFurniture instance name, price and presence of a bed
 * @returns {string} The string containing the homeFurniture instance name, price and presence of a computer table
 */
homeFurniture.getInfo = function() {
    return `${Furniture.prototype.getInfo.call(this)} The ${this.name} has a bed: ${this.hasBed}.`;
};

console.log(` The result of calling the getInfo() method on the ${officeFurniture.name} instance of ${Furniture.name} class:\n`, officeFurniture.getInfo(), '\n');

console.log(` The result of calling the getInfo() method on the ${homeFurniture.name} instance of ${Furniture.name} class:\n`, homeFurniture.getInfo());
