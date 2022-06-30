export default function createClearButton(button, { handleClearItems }) {
    button.addEventListener('click', () => {
        handleClearItems();
    });
    return () => { };
}