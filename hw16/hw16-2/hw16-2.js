console.log('oop. task 2\n'.toUpperCase());

// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, 
// метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование. 
// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить 
// оличество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить 
// количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

/**
 * ES5 class representing a building
 * @param {string} name The building name
 * @param {number} floorsNumber The building floors number
 * @constructor
 */
function Building(name, floorsNumber) {
    this.name = name;
    this.floorsNumber = floorsNumber;

    /**
     * Get floors number
     * @returns {number} The floors number
     */
    this.getFloorsNumber = function() {
        return this.floorsNumber;
    };

    /**
     * Set floors number
     * @param {number} newFloorsNumber The floors number to be set
     */
    this.setFloorsNumber = function (newFloorsNumber) {
        this.floorsNumber = newFloorsNumber;
    };
}

/**
 * ES5 class representing a dwelling house
 * @extends Building
 * @param {string} name The dwelling house name
 * @param {number} floorsNumber The floors number
 * @param {number} flatsPerFloor The number of flats per floor
 * @constructor
 */
function DwellingHouse(name, floorsNumber, flatsPerFloor) {
    Building.apply(this, arguments);
    this.flatsPerFloor = flatsPerFloor;

    /**
     * Get the floors number and the flats number
     * @returns {{floorsNumber: number, flatsNumber: number}} The object containing the floors number and the flats number
     */
    this.getFloorsNumber = function() {
        return {
            floorsNumber: this.floorsNumber,
            // another solution - floorsNumber: buildingFloorsNumber.call(this), where:
            // const buildingFloorsNumber = this.getFloorsNumber(); - save the parent method in a variable before this method definition
            flatsNumber: this.floorsNumber * this.flatsPerFloor
        };
    };
}

/**
 * ES5 class representing a shopping center
 * @extends Building
 * @param {string} name The shopping center name
 * @param {number} floorsNumber The floors number
 * @param {number} shopsPerFloor The number of shops per floor
 * @constructor
 */
function ShoppingCenter(name, floorsNumber, shopsPerFloor) {
    Building.call(this, name, floorsNumber);
    this.shopsPerFloor = shopsPerFloor;

    /**
     * Get the floors number and the shops number
     * @returns {{floorsNumber: number, shopsNumber: number}} The object containing the floors number and the shops number
     */
    this.getFloorsNumber = function() {
        return {
            floorsNumber: this.floorsNumber,
            shopsNumber: this.floorsNumber * this.shopsPerFloor
        };
    };
}

const comfortTown = new DwellingHouse('Comfort Town', 7, 6);
const dreamTown = new ShoppingCenter('Dream Town', 3, 28);

console.log(` The result of calling the getFloorsNumber() method on the ${comfortTown.name} instance of ${DwellingHouse.name} class:\n`, comfortTown.getFloorsNumber(), '\n');
console.log(` The result of calling the getFloorsNumber() method on the ${dreamTown.name} instance of ${ShoppingCenter.name} class:\n`, dreamTown.getFloorsNumber());
