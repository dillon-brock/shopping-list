export default function createAddItemForm(form, { handleAddItem }) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        handleAddItem(formData.get('item'), formData.get('quantity'));
        form.reset();
    });
    return () => { };
}