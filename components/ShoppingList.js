export default function createShoppingList(root, { handleBuy }) {

    const list = root.querySelector('ul');

    return ({ items }) => {
        if (!items.length) {
            root.classList.add('hidden');
        }
        else {
            root.classList.remove('hidden');
            list.innerHTML = '';
            for (const item of items) {
                list.append(listItem({ item, handleBuy }));
            }
        }
    };
}

function listItem({ item, handleBuy }) {
    const li = document.createElement('li');
    li.classList.add('item');
    item.bought ? li.classList.add('bought') : li.classList.remove('bought');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    checkbox.addEventListener('change', () => {
        handleBuy(item);
    });

    checkbox.checked = item.bought;

    const listItem = document.createElement('span');
    listItem.textContent = item.item;
    if (item.quantity) {
        const itemQuantity = document.createElement('span');
        itemQuantity.textContent = `(${item.quantity})`;
        li.append(checkbox, listItem, itemQuantity);
    }    
    else {
        li.append(checkbox, listItem);
    }

    return li;

}