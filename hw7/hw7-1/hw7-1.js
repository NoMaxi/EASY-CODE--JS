console.log('element properties. part 2\n'.toUpperCase());

// 1. Найти параграф и получить его текстовое содержимое (только текст!)
const p = document.querySelector('p');
console.log('1. Text content of the paragraph:\n', p.textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
const getNodeInfo = (node) => {
    if (!node || !node.nodeType) return 'ERROR! Invalid data input - please enter a node';

    return {
        type: node.nodeType,
        name: node.nodeName,
        childNodesNumber: node.childNodes.length
    }
};

console.log('2. Information about the entered node:', getNodeInfo(p));

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
const ul = document.querySelector('ul');
const getTextFromUl = (node) => {
    if (!node || !node.nodeType) return 'ERROR! Invalid data input - please enter a node (list)';

    let textArray = [];
    for (let item of node.children) {
        textArray.push(item.querySelector('a').textContent);
        // .querySelector('a') can be omitted if it is known for sure that there are no text nodes beside a-element inside each li-element
    }

    return textArray;
};

console.log('3. An array containing text content of links inside list items: ', getTextFromUl(ul));

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:m
//     -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
const replaceTextNodes = (node) => {
    if (!node || !node.nodeType) return 'ERROR! Invalid data input - please enter a node';

    for (let item of node.childNodes) {
        if (item.nodeType === 3) item.textContent = '-text-';
    }

    return node;
};

replaceTextNodes(p);

