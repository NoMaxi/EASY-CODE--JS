console.log('oop. task 1\n'.toUpperCase());

// 1. Есть класс Planet
// function Planet(name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name;
//     }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’

/**
 * ES5 class representing a planet
 * @param {string} name The planet name
 * @constructor
 */
function Planet(name) {
    this.name = name;
    /**
     * Get the planet name
     * @returns {string} The string containing the planet name
     */
    this.getName = function () {
        return `The ${Planet.name.toLowerCase()} name is ${this.name}`;
    }
}

/**
 * ES5 class representing a planet with satellite
 * @extends Planet
 * @param {string} name The planet name
 * @param {string} satelliteName The satellite name
 * @constructor
 */
function PlanetWithSatellite(name, satelliteName) {
    // use Parent.apply() and not Planet.call() for the case of the number of arguments change
    Planet.apply(this, arguments);
    /** @type {string} */
    this.satelliteName = satelliteName;

    // https://learn.javascript.ru/functional-inheritance#pereopredelenie-metodov
    /**
     * Save the Planet getName method to a variable for further use in extended PlanetWithSatellite getName method
     * @type {(function(): string) | *}
     */
    const planetName = this.getName;

    /**
     * Get the planet and satellite names
     * @returns {string} The string containing the planet and the satellite names
     */
    this.getName = function () {
        return  `${planetName.call(this)}. The satellite name is ${this.satelliteName}.`

        // another solution - includes excess instance of Planet creation:
        // return `${new Planet(this.name).getName()}. The satellite is ${this.satelliteName}.`;
    }
}

const earth = new PlanetWithSatellite('earth', 'moon');
console.log(earth.getName());
