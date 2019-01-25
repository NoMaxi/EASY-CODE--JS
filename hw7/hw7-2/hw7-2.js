console.log('element properties. part 2\n'.toUpperCase());

// 1. Найти в коде список ul и добавить класс “list”
const ul = document.querySelector('ul');
ul.classList.add('list');

console.log('1. Classes of ul-element: ', ul.className);

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
const link = document.querySelector('ul ~ a');
link.setAttribute('id', 'link'); // or: link.id = 'link';

console.log('2. Attributes of the link located behind the ul-element: ', link.attributes);

// 3. На li через один (начиная с самого первого) установить класс “item”
const lis = ul.querySelectorAll('li:nth-child(2n-1)');
for (let li of lis) {
    li.classList.add('item');
}

// another solution:
// const lis = ul.children;
// for (let i = 0; i < lis.length; i += 2) {
//     lis[i].classList.add('item');
// }

console.log('3. Li-elements with class "item": ', lis);

// 4. На все ссылки в примере установить класс “custom-link”
const links = document.links;
for (let link of links) {
    link.classList.add('custom-link');
}

console.log('4. All links: ', links);
