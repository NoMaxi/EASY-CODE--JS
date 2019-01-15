console.log('dom. part 2\n'.toUpperCase());

// 1. Создать функцию, которая принимает два элемента. Функция проверяет,
// является ли первый элемент родителем для второго:
//     isParent(parent, child);
//     isParent(document.body.children[0], document.querySelector('mark'));
//        true так как первый див является родительским элементом для mark
//     isParent(document.querySelector('ul'), document.querySelector('mark'));
//        false так ul НЕ является родительским элементом для mark
function isParent(parent, child) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
    return parent !== child ? parent.contains(child) : false;
}

console.log('1. The first entered element is the parent of the second element: ', isParent(document.body.children[0], document.querySelector('mark')));

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
const ul = document.querySelector('ul'); // also: ul = document.getElementsByTagName('ul')[0] - live collection
const links = document.links;
const linksNotInUl = [];

for (let i = 0; i < links.length; i++) {
    if (ul !== links[i] && !ul.contains(links[i])) linksNotInUl.push(links[i]);
}

console.log('2. List of all links except links that are inside the ul-element: ', linksNotInUl);

// 3. Найти элемент, который находится перед и после списка ul
console.log('3. Element placed before ul-element: ', ul.previousElementSibling);
console.log('   Element placed after ul-element: ', ul.nextElementSibling);

// 4. Посчитать количество элементов li в списке
console.log('4. The number of li-elements inside the ul-element: ', ul.children.length);
// if it is not known for sure that the markup is correct and that all elements inside the ul-element are li-elements:
// const ulItems = ul.children;
// let liCount = 0;
// for (let i = 0; i < ulItems.length; i++) {
//     if (ulItems[i].matches('li')) liCount++;
// }
// console.log('4. The number of li-elements inside the ul-element: ', liCount);

// 5. В коде с занятия написать функцию по редактированию задачи.

// 6. Подумать и улучшить функцию generateId();

