import { ItemsProvider } from '@/context/ItemsContext';
import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <ItemsProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Lost & Found' }} />
        <Stack.Screen name="add" options={{
          title: 'Report an item', presentation:
            'modal'
        }} />
        <Stack.Screen name="item/[id]" options={{ title: 'Item' }} />
      </Stack>
    </ItemsProvider>
  );
}