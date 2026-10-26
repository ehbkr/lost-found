Property 'claimed' is missing in type '{ id: string; title: string; place: string; }' but required in type 'Item'.
1.
because it needs claimed to be defined in index.tsx
2.
it shows what os its running on, and it comes from index,ts
3.
const { id } = useLocalSearchParams<{ id: string }>();

it shows 
This item does not exist (anymore).