export default function createShoppingList(root) {
    return ({ items }) => {
        for (const item of items) {
            root.append(listItem({ item }));
        }
    };
}

function listItem({ item }) {
    const li = document.createElement('li');
    li.classList.add('item');

    const p = document.createElement('p');
    if (item.quantity) {
        p.textContent = `${item.item}  x${item.quantity}`;
    }    
    else {
        p.textContent = item.item;
    }
    li.append(p);

    return li;

}