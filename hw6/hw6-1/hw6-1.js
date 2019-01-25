console.log('dom. part 1\n'.toUpperCase());

// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
// 2. body
// 3. все дочерние элементы body и вывести их в консоль.
// 4. первый div и все его дочерние узлы:
// 	а) вывести все дочерние узлы в консоль
// 	б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы

// 1. head
console.log('1. Head element: ', document.head);

// 2. body
const body = document.body;
console.log('2. Body element: ', body);

// 3. все дочерние элементы body и вывести их в консоль.
console.log('3. All child elements of body element: ', body.children);

// 4. первый div и все его дочерние узлы:
// 	а) вывести все дочерние узлы в консоль
const firstDivNodes = body.firstElementChild.childNodes;
console.log('4.a. All child nodes of first div element: ',
    firstDivNodes);

// 4. первый div и все его дочерние узлы:
// 	б) вывести в консоль все дочерние узлы, кроме первого и последнего
const firstDivNodesArray = [];
for (let i = 1; i < firstDivNodes.length - 1; i++) {
    firstDivNodesArray.push(firstDivNodes[i]);
}
console.log('4.b. Child nodes of first div element without first and last node: ', firstDivNodesArray);
