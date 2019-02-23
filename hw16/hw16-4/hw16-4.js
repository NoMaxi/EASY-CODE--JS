console.log('oop. task 4\n'.toUpperCase());

// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации”
// и методом “получить информацию” (метод должен вывести имя и дату регистрации).
// Метод должен быть объявлен с помощью прототипов (Func.prototype...).
// Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например),
// содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать
// информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”).

/**
 * ES5 class representing a user
 * @param {string} name The user name
 * @constructor
 */
function User(name) {
    this.name = name;
    /** @type {Date} */
    this.registrationDate = new Date();
}

/**
 * Get information about the user name and registration date
 * @returns {string} The string containing the user name and registration date
 */
User.prototype.getInfo = function () {
    return ` The registration date of the user ${this.name}: ${this.registrationDate}.\n`;
};

/**
 * ES5 class representing an admin
 * @extends User
 * @param {string} name The admin name
 * @constructor
 */
function Admin(name) {
    User.apply(this, arguments);
    /**
     * Super admin rights
     * @type {boolean}
     * @private
     */
    this._superAdmin = false;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

/**
 * Get information about the admin name, registration date and super admin rights
 * @returns {string} The string containing the user name, registration date and super admin rights
 */
Admin.prototype.getInfo = function () {
    return `${User.prototype.getInfo.call(this)} ${this.name} has super admin rights: ${this._superAdmin}.`;
};

/**
 * ES5 class representing a guest
 * @extends User
 * @param {string} name The guest name
 * @constructor
 */
function Guest(name) {
    User.apply(this, arguments);
    /**
     * Guest account validity date - 1 week is added to registration date
     * @type {Date}
     */
    this.validityDate = new Date(Date.parse(this.registrationDate) + 1000 * 60 * 60 * 24 * 7);
}

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

/**
 * Get information about the guest name, registration date and validity date
 * @returns {string} The string containing the user name, registration date and validity date
 */
Guest.prototype.getInfo = function () {
    return `${User.prototype.getInfo.call(this)} ${this.name}'s account is valid till: ${this.validityDate}.`;
};

const admin = new Admin('Max');
const guest = new Guest('John');

console.log(admin.getInfo(), '\n');
console.log(guest.getInfo());
