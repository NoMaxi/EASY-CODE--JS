console.log('events. part 2\n'.toUpperCase());

// 7. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none.
// При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно
// в тот dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item
// блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже
// открытый dropdown-menu должен закрываться а на тот который кликнули открываться.

const ul = document.querySelector('.menu');
const lis = ul.children;

ul.addEventListener('click', (e) => {
    const currentDropdownItem = e.target.closest('.dropdown-item');

    if (currentDropdownItem && (e.target.tagName === 'SPAN' || e.target.classList.contains('dropdown-item'))) {
        // e.target check for class '.dropdown-item' allows to show/hide the dropdown menu by
        // clicking not only the <span>Dropdown menu item</span> but also the dot that
        // indicates the <li class="dropdown-item">
        for (let li of lis) {
            if (li !== currentDropdownItem && li.classList.contains('dropdown-item')) {
                li.querySelector('.dropdown-menu').classList.add('d-none');
            }
        }

        currentDropdownItem.querySelector('.dropdown-menu').classList.toggle('d-none');
    }
});

