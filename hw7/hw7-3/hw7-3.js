console.log('element properties. part 3\n'.toUpperCase());

// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
//    <li><a href="#">Link1</a></li>
//    ...
//    <li class=”new-item”>item 5</li>
//    <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
const ul = document.querySelector('ul');
let htmlToBeInserted = '';

// build the HTML-fragment as a string first and then add all elements to the DOM at once
for (let i = 1; i <= 3; i++) {  // add 3 list items
    htmlToBeInserted += `<li class="new-item">item ${ul.children.length + i}</li>`;
}

ul.insertAdjacentHTML('beforeend', htmlToBeInserted);

console.log('1. Li-elements inside ul-elements: ', ul.children);

// another solution - is worse because changes of the DOM occur on each iteration
// for (let i = 1; i <= 3; i++) {
//     const newLi = document.createElement('li');
//     newLi.classList.add('new-item');
//     newLi.textContent = `item ${ul.children.length + 1}`;
//     ul.appendChild(newLi);
// }


// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).
// in my understanding the task is to insert the link inner content into <strong>-tag
const ulLinks = ul.querySelectorAll('a');

for (let link of ulLinks) {
    link.innerHTML = `<strong>${link.innerHTML}</strong>`;
    // not link.textContent is used for the case if there will be other elements like <em>, <b>, <i> etc. inside the link

    // if it is needed only to insert <strong>-tag at the end of the link:
    // const strong = document.createElement('strong');
    // link.insertAdjacentElement('beforeend', strong);
}

console.log('2. Ul-element: ', ul);


// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
const img = document.createElement('img');
img.src = 'http://www.1gai.ru/uploads/posts/2014-01/1390392897_maybach-knight-luxury-1.jpg';
img.alt = 'Mercedes-Maybach';

document.body.insertAdjacentElement('afterbegin', img);

console.log('3. Image at the start of body-element: ', img);


// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
const mark = document.querySelector('mark');

mark.insertAdjacentText('beforeend', 'green');
mark.classList.add('green');

console.log('4. Mark-element: ', mark);


// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
const reverseListOrderByTextContent = (list) => {
    const lis = list.children;
    const lisArray = [];

// transform NodeList into an array of nodes (objects)
    for (let li of lis) {
        lisArray.push(li);
    }

// sort the array of nodes by textContent property
    lisArray.sort((prev, next) => prev.textContent < next.textContent ? 1 : -1);

// rebuild the list.innerHTML
    let ulNewInnerHtml = '';
    for (let li of lisArray) {
        ulNewInnerHtml += li.outerHTML;
    }

// replace the existing list in the DOM with new list
    list.innerHTML = ulNewInnerHtml;
};

reverseListOrderByTextContent(ul);

console.log('5. Ul-element: ', ul);
