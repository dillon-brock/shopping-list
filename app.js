import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import createUser from './components/User.js';
import { addItem, clearItems, getAllItems, updateItem } from './services/shopping-list-service.js';
import createShoppingList from './components/ShoppingList.js';
import createAddItemForm from './components/AddItemForm.js';
import createClearButton from './components/ClearButton.js';

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

async function handleBuy(item) {
    item.bought = !item.bought;
    const boughtItem = await updateItem(item);
    items[items.indexOf(item)] = boughtItem;
    display();
}

async function handleClearItems() {
    await clearItems();
    items = [];
    display();
}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const ShoppingList = createShoppingList(document.querySelector('#contents'), { handleBuy });
const AddItemForm = createAddItemForm(document.querySelector('form'), { handleAddItem });
const ClearButton = createClearButton(document.querySelector('#clear-button'), { handleClearItems });

function display() {
    User({ user });
    ShoppingList({ items });
    AddItemForm();
    ClearButton();
}

handlePageLoad();