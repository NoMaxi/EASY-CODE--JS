console.log('AJAX\n'.toUpperCase());

// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com,
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

httpClient.get('https://jsonplaceholder.typicode.com/users', (response) => {
    const users = JSON.parse(response);
    console.log(users);
    displayTable(users);
});

/**
 * display the table in the DOM
 * @param {Array} users
 */
function displayTable(users) {
    const table = document.querySelector('.table');
    table.insertAdjacentHTML('afterbegin', tableTemplate(users));
}

/**
 * create a table template
 * @param {Array} users
 */
function tableTemplate(users) {
    let tHead = `
        <thead>
            <tr>
                <td class="text-center">Id</td>
                <td class="text-center">Name</td>
            </tr>
        </thead>
    `;

    let tBody = `
        <tbody>
            ${tBodyRows(users)}
        </tbody>
    `;

    function tBodyRows(users) {
        let tBodyRows = '';
        for (let user of users) {
            let tr = `
            <tr>
                <td class="text-center">${user.id}</td>
                <td class="text-center">
                    ${dataTemplate(user)}
                </td>
            </tr>
        `;
            tBodyRows += tr;
        }
        return tBodyRows;
    }

    return tHead + tBody;
}

/**
 * create a template for a table cell containing user's name and collapsible user details section
 * @param {Object} user
 */
function dataTemplate(user) {
    let userName = `
        <a data-toggle="collapse" href="#collapse${user.id}" role="button" aria-expanded="false" aria-controls="collapse${user.id}">${user.name}</a>
    `;

    let detailsDiv = `
        <div class="collapse" id="collapse${user.id}">
            <div class="pl-4 text-left">
                ${detailsTemplate(user)}
            </div>
        </div>
    `;

    return userName + detailsDiv;
}

/**
 * template for a user's details section of a table cell
 * @param {Object} user
 */

function detailsTemplate(user) {
    let data = '';
    let contacts = '';

    formDetailsTemplate(user);

    function formDetailsTemplate(user) {
    	// use recursion to iterate through nested objects if they are present
    	for (let key in user) {
	    	if (user.hasOwnProperty(key) && typeof user[key] === 'object') {
                data += `<p class="pl-3 pt-3 text-info">${key}</p>`;
	    		formDetailsTemplate(user[key]);
	    	} else if (user.hasOwnProperty(key) && (key === 'phone' || key === 'website')) {
                contacts += `<p class="pt-3">${key}: ${user[key]}</p>`;
            } else {
                data += `<p>${key}: ${user[key]}</p>`;
	    	}
    	}
    }

    return data + contacts;
}
