import { nanoid } from 'nanoid';

export const initialItems = [
    {
        id: nanoid(),
        name: 'good mood',
        packed: true,
    },
    {
        id: nanoid(),
        name: 'passport',
        packed: false,
    },
    {
        id: nanoid(),
        name: 'phone charger',
        packed: false,
    },
];

export const sortingOptions = [
    { label: 'Sort by default', value: 'default' },
    { label: 'Sort by packed', value: 'packed' },
    { label: 'Sort by unpacked', value: 'unpacked' },
];
