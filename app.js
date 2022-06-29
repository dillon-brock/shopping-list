import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import createUser from './components/User.js';
import { addItem, getAllItems } from './services/shopping-list-service.js';
import createShoppingList from './components/ShoppingList.js';
import createAddItemForm from './components/AddItemForm.js';

// State
let user = null;
let items = [];

// Action Handlers
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    const { data, error } = await getAllItems();
    items = data;
    if (error) {
        // eslint-disable-next-line no-console
        console.log(error.message);
    }

    display();
}

async function handleSignOut() {
    signOut();
}

async function handleAddItem(item, quantity) {
    const newItem = await addItem(item, quantity);
    items.push(newItem);
    display();
}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const ShoppingList = createShoppingList(document.querySelector('#shopping-list'));
const AddItemForm = createAddItemForm(document.querySelector('form'), { handleAddItem });

function display() {
    User({ user });
    AddItemForm();
    ShoppingList({ items });
}

handlePageLoad();