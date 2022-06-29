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