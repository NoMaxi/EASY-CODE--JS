console.log('events. part 1\n'.toUpperCase());

// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом.
// который находится в атрибуте data-text у кнопки.
const btnMsg = document.getElementById('btn-msg');
alert(btnMsg.dataset.text);

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной;
// когда указатель мыши покидает кнопку, она становится прежнего цвета.
// Цвет менять можно через добавление класса.
btnMsg.addEventListener('mouseover', (e) => {
    btnMsg.classList.add('red');
});

btnMsg.addEventListener('mouseout', (e) => {
    btnMsg.classList.remove('red');
});

// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
const tag = document.getElementById('tag');
document.addEventListener('click', (e) => {
    tag.textContent = `Tag: ${e.target.tagName}`;
});

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li
// с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
const btnGenerate = document.getElementById('btn-generate');
const ul = document.querySelector('ul');
btnGenerate.addEventListener('click', (e) => {
    ul.insertAdjacentHTML('beforeend', `<li>Item ${ul.children.length + 1}</li>`)
});
