/**
 * TODOS
 * 1. Добавление задачи
 * 2. Удаление задачи
 * 3. Редактирование задачи
 */

 /**
 * Одна задача это объект из следующих полей
 * id - произвольная уникальная строка
 * title - заголовок задачи
 * text - текст задачи
 */

 /**
  * todosStorage - обьект для хранения всех todos
  */
 const todosStorage = {
     currentTodos: [],
     deletedTodos: []
 };

/**
 * 
 * @param {String} title 
 * @param {String} text
 * @returns {[]} currentTodos
 */
 const addTodoItem = (title, text) => {
    if (!title) return console.log('Please provide todo title');
    if (!text) return console.log('Please provide todo text');

    todosStorage.currentTodos.push({title, text, id: generateId()});
    return todosStorage.currentTodos;
 };

 /**
 * generateId - создает произвольную строку
 * @returns {string} - новый id
 */
// const generateId = () => {
//     const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
//     let id = '';
//
//     for (let i = 0; i < 10; i++) {
//         const index = Math.floor(Math.random() * uniqueValues.length);
//         id += uniqueValues[index];
//     }
//
//     return id;
// };

const generateId = () => {
    // 1) random string with digits and both lowercase and uppercase letters:
    return Math.random().toString(36).substr(2, 10).split('')
        .map(el => Math.random() < 0.5 ? el : el.toUpperCase()).join('');

    // 2) random string with digits and only lowercase letters:
    // return Math.random().toString(36).substr(2, 10);

    // 3) random string obtained from an array with 10 empty elements:
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
    // const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    // return Array(10).fill(0).map(() => uniqueValues[Math.floor(Math.random() * uniqueValues.length)]).join('');
};

/**
 *
 * @param {String} id
 * @returns {[]} currentTodos
 */
const deleteTodoItem = (id) => {
    if (!id) return console.log("Передайте id удаляемой задачи.");
    
    todosStorage.currentTodos = todosStorage.currentTodos.filter((todoItem) => todoItem.id !== id);
    return todosStorage.currentTodos;
};

/**
 *
 * @param {String} id
 * @param {String} title
 * @param {String} text
 */
const editTodoItem = (id, title, text) => {
    if (!id || typeof id !== 'string') return console.log('Please enter todo id');
    if (!title || typeof title !== 'string') return console.log('Please enter todo title');
    if (!text || typeof text !== 'string') return console.log('Please enter todo text');

    // this solution is preferable because the loop can be interrupted immediately when the item with searched 'id' is found:
    for (let currentTodoItem of todosStorage.currentTodos) {
        if (currentTodoItem.id === id) {
            currentTodoItem.title = title;
            currentTodoItem.text = text;
            break;
        }
    }

    // another solution:
    // todosStorage.currentTodos.forEach(todoItem => {
    //     if (todoItem.id === id) {
    //         todoItem.title = title;
    //         todoItem.text = text;
    //     }
    // });
    return todosStorage.currentTodos;
};
