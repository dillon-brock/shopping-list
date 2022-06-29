import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import createUser from './components/User.js';
import { getAllItems } from './services/shopping-list-service.js';
import createShoppingList from './components/ShoppingList.js';

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

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const ShoppingList = createShoppingList(document.querySelector('#shopping-list'));

function display() {
    User({ user });
    ShoppingList({ items });
}

handlePageLoad();