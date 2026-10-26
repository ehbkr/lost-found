import { Item } from '@/types';
import { createContext, ReactNode, useContext, useState } from 'react';
const STARTER_ITEMS: Item[] = [
{ id: '1', title: 'Blue water bottle', place: 'Library, 2nd floor', claimed: false },
{ id: '2', title: 'Student card', place: 'Cafeteria', claimed: false },
{ id: '3', title: 'USB-C charger', place: 'Room B12', claimed: true },
];
type NewItem = {
title: string;
place: string;
};
type ItemsContextValue = {
items: Item[];
addItem: (data: NewItem) => void;
toggleClaimed: (id: string) => void;
removeItem: (id: string) => void;
};
const ItemsContext = createContext<ItemsContextValue | null>(null);
export function ItemsProvider({ children }: { children: ReactNode }) {
const [items, setItems] = useState<Item[]>(STARTER_ITEMS);
function addItem(data: NewItem) {
const newItem: Item = { id: Date.now().toString(), claimed: false, ...data };
setItems((current) => [newItem, ...current]);
}
function toggleClaimed(id: string) {
setItems((current) =>
current.map((item) => (item.id === id ? { ...item, claimed: !item.claimed } :
item)),
);
}
function removeItem(id: string) {
setItems((current) => current.filter((item) => item.id !== id));
}
return (
<ItemsContext.Provider value={{ items, addItem, toggleClaimed, removeItem }}>
{children}
</ItemsContext.Provider>
);
}
export function useItems() {
const context = useContext(ItemsContext);
if (!context) {
throw new Error('useItems() must be used inside <ItemsProvider>');
}
return context;
}