// Todo manager
// 1. создать задачу
//      а. обработка формы
//          - проверить данные перед добавлением (валидация)
//      б. добавить задачу в массив
//      в. добавить данные в таблицу
//      г. очистить форму
// 2. удалить задачу
//      а. подтверждение
//      б. удаление данных из таблицы
//      в. удаление данных из массива 
// 3. редактировать задачу 
//      а. взять данные из массива
//      б. поместить в форму 
//      в. обработать форму на редактирование
//          - валидация
//      г. обновить данные в массиве
//      д. обновить данные в таблице
//      е. очистить форму

    
const todosStorage = {
    todos: []
};

// UI Elements
const card = document.querySelector('.card');
const formCol = document.querySelector('.form-col');
const form = document.forms['addTodoForm'];
const title = form.elements['title'];
const text = form.elements['text'];
const button = form.querySelector('.btn[type="submit"]');
const table = document.querySelector('.table tbody');

// event handling
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!title.value && !text.value) return alertMessage('alert-danger', 'Введите title и text');
    if (!title.value) return alertMessage('alert-danger', 'Введите title');
    if (!text.value) return alertMessage('alert-danger', 'Введите text');

    // 1. если есть аттр data-task-id
    // 2. вызываем функцию editTodoStorage
    // 3. очистка формы и удалить аттр data-task-id
    if (form.hasAttribute('data-task-id')) {
        editTodoStorage(form.dataset.taskId, title.value, text.value);
        alertMessage('alert-info', 'Задача успешно изменена');
        form.reset();
        return;
    }

    addNewTodoToStorage(title.value, text.value);
    alertMessage('alert-info', 'Задача добавлена успешно');
    form.reset();
});

table.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-todo')) {
    	if (form.hasAttribute('data-task-id')) {
    		alertMessage('alert-info', 'Сначала закончите редактирование задачи');
    		return;
    	}

        const id = event.target.closest('[data-id]').dataset.id;
        deleteTodoFromStorage(id);
        alertMessage('alert-info', 'Задача удалена успешно');
        return;
    }

    if (event.target.classList.contains('edit-todo')) {
        const id = event.target.closest('[data-id]').dataset.id;
        setFormToEdit(id);
        return;
    }

    if (event.target.classList.contains('clone-todo')) {
        if (form.hasAttribute('data-task-id')) {
            alertMessage('alert-info', 'Сначала закончите редактирование задачи');
            return;
        }

        const id = event.target.closest('[data-id]').dataset.id;
        let clonedTitle;
        let clonedText;

        for (let todo of todosStorage.todos) {
            if (todo.id === id) {
                clonedTitle = todo.title;
                clonedText = todo.text;
                break;
            }
        }

        addNewTodoToStorage(clonedTitle, clonedText);
    }
});


// alert messages
/**
 * 
 * @param {String} className 
 * @param {String} message 
 */
function alertMessage(className, message) {
    removeAlert();

    const template = alertTemplate(className, message);
    formCol.insertAdjacentHTML('afterbegin', template);

    setTimeout(removeAlert, 2000);
}

function removeAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) formCol.removeChild(currentAlert);
}

   
/**
* generateId - создает произвольную строку 
* @returns {string} - новый id
*/
function generateId() {
    const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    for (let char of uniqueValues) {
        let index = Math.floor(Math.random() * uniqueValues.length);
        id += uniqueValues[index];
    }
 
    return id;
 }


/**
* addNewTodoToStorage - добавляет новый todo в storage а потом в view
* @param {String} title 
* @param {String} text
* @returns {[]} currentTodos
*/
function addNewTodoToStorage(title, text) {
    if (!title) return console.log('Please provide todo title');
    if (!text) return console.log('Please provide todo text');
 
    const newTodo = {title, text, id: generateId()};
    todosStorage.todos.push(newTodo);

    // Добавим в разметку
    addNewTodoToView(newTodo);

    return todosStorage.todos;
 }

 /**
* 
* @param {String} id 
* @returns {[]} currentTodos
*/
function deleteTodoFromStorage(id) {
    const checkIdRes = checkId(id);
    if (checkIdRes.error) return console.log(checkIdRes.msg);
    
    let removedTask;

    for (let i = 0; i < todosStorage.todos.length; i++) {
        if (todosStorage.todos[i].id === id) {
            removedTask = todosStorage.todos.splice(i, 1);
            break;
        }
    }

    // удаляем из разметки
    deleteTodoFromView(id);
    
    return removedTask;
 }

/**
 * 
 * @param {String} id 
 */
function checkId(id) {
    if (!id) return { error: true, msg: 'Передайте id удаляемой задачи.' };

    const idIsPresent = todosStorage.todos.some((todo) => todo.id === id );
    if (!idIsPresent) return { error: true, msg: 'Задачи с таким id несуществует' };

    return { error: false, msg: '' };
}


// View functions

/**
 * 
 * @param {String} id 
 */
function deleteTodoFromView(id) {
    const target = document.querySelector(`[data-id="${id}"]`);
    target.parentElement.removeChild(target);
}

/**
 * 
 * @param {*} todo
 */
function addNewTodoToView(todo) {
    const template = todoTemplate(todo);
    table.insertAdjacentHTML('afterbegin', template);
}

/**
 * 
 * @param {*} todo 
 * todo {
 *  id: string;
 *  title: string;
 *  text: string;
 * }
 */
function todoTemplate(todo) {
    return `
        <tr data-id="${todo.id}"> 
            <td>${todo.title}</td>
            <td>${todo.text}</td>
            <td class="text-center">
                <i title="Remove task" class="fas fa-trash remove-todo ml-2"></i>
                <i title="Edit task" class="fas fa-edit edit-todo ml-3"></i>
                <i title="Clone task" class="far fa-clone clone-todo ml-3"></i>
            </td>
        </tr>
    `;
}

/**
 * 
 * @param {String} className
 * @param {String} message 
 */
function alertTemplate(className, message) {
    return `
        <div class="alert ${className}">${message}</div>
    `;
}

addNewTodoToStorage('My title 1', 'My text 1');



// Make editing work

/**
 * 
 * @param {String} id 
 * @param {String} title 
 * @param {String} text 
 */
function editTodoStorage(id, title, text) {
    if (!id) return console.log('Please provide todo id');
    if (!title) return console.log('Please provide todo title');
    if (!text) return console.log('Please provide todo text');

    let editedTask;

    for (let i = 0; i < todosStorage.todos.length; i++) {
        if (todosStorage.todos[i].id === id) {
            editedTask = {
                id: todosStorage.todos[i].id,
                title: todosStorage.todos[i].title,
                text: todosStorage.todos[i].text,
            };
            todosStorage.todos[i].title = title;
            todosStorage.todos[i].text = text;
            break;
        }
    }
    
    editTodoView({id, title, text});
    setFormToStandardView();

    return editedTask;
}

/**
 *
 * @param {*} todo
 */
function editTodoView(todo) {
    const target = table.querySelector(`[data-id="${todo.id}"]`);
    target.innerHTML = todoTemplate(todo);
}

/**
 * 
 * @param {String} id 
 */
function setFormToEdit(id) {
    // 1. найти нужную задачу в нашем storage
    // 2. в поле title и text записываем значение title, text с todo, которую мы получили из storage
    // 3. добавить форме атр data-task-id=id;
    // 4. получить доступ к submit кнопке и перезаписать ее на save
    for (let todo of todosStorage.todos) {
        if (todo.id === id) {
            title.value = todo.title;
            text.value = todo.text;
            break;
        }
    }

    form.dataset.taskId = id;
    button.textContent = 'Save';
    button.classList.add('btn-save');
    card.classList.add('form-edit');
}

function setFormToStandardView() {
	form.removeAttribute('data-task-id');
	button.textContent = 'Add task';
	button.classList.remove('btn-save');
    card.classList.remove('form-edit');
}
