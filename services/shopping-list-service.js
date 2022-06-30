import { getUser } from './auth-service.js';
import { client } from './client.js';

export async function getAllItems() {
    const response = await client
        .from('shopping-list')
        .select();
    
    return response;
}

export async function addItem(item, quantity) {
    const response = await client
        .from('shopping-list')
        .insert({ item, quantity })
        .single();
    
    return response.data;
}

export async function updateItem(item) {
    const response = await client
        .from('shopping-list')
        .update(item)
        .match({ id: item.id })
        .single();
    
    return response.data;
}

export async function clearItems() {
    const response = await client
        .from('shopping-list')
        .delete()
        .match({ user_id: getUser().id });
    
    return response.data;
}