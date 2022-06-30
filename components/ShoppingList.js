export default function createShoppingList(root, { handleBuy }) {
    return ({ items }) => {
        root.innerHTML = '';
        for (const item of items) {
            root.append(listItem({ item, handleBuy }));
        }
    };
}

function listItem({ item, handleBuy }) {
    const li = document.createElement('li');
    li.classList.add('item');
    item.bought ? li.classList.add('bought') : li.classList.remove('bought');

    const button = document.createElement('button');
    button.textContent = 'BUY';

    button.addEventListener('click', () => {
        handleBuy(item);
    });

    const p = document.createElement('p');
    if (item.quantity) {
        p.textContent = `${item.item}  x${item.quantity}`;
    }    
    else {
        p.textContent = item.item;
    }
    li.append(button, p);

    return li;

}