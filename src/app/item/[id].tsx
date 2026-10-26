import { useItems } from '@/context/ItemsContext';
import { Link, router, Stack, useLocalSearchParams } from 'expo-router';
import { Alert, Pressable, StyleSheet, Switch, Text, View } from 'react-native';
export default function ItemScreen() {
const { id } = useLocalSearchParams<{ id: string }>();
const { items, toggleClaimed, removeItem } = useItems();
const item = items.find((candidate) => candidate.id === id);
if (!item) {
return (
<View style={styles.screen}>
<Text style={styles.title}>This item does not exist (anymore).</Text>
<Link href="/" style={styles.link}>
Back to the list
</Link>
</View>
);
}
const confirmRemove = () => {
Alert.alert('Remove this item?', item.title, [
{ text: 'Cancel', style: 'cancel' },
{
text: 'Remove',
style: 'destructive',
onPress: () => {
removeItem(item.id);
router.back();
},
},
]);
};
return (
<View style={styles.screen}>
<Stack.Screen options={{ title: item.title }} />
<Text style={styles.title}>{item.title}</Text>
<Text style={styles.place}>📍 {item.place}</Text>
<View style={styles.row}>
<Text style={styles.label}>Returned to its owner</Text>
<Switch value={item.claimed} onValueChange={() => toggleClaimed(item.id)} />
</View>
<Pressable onPress={confirmRemove} style={styles.danger}>
<Text style={styles.dangerText}>Remove this item</Text>
</Pressable>
</View>
);
}
const styles = StyleSheet.create({
screen: {
flex: 1,
padding: 16,
gap: 12,
},

title: {
fontSize: 24,
fontWeight: '700',
},
place: {
fontSize: 16,
color: '#6b7280',
},
row: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
paddingVertical: 12,
},
label: {
fontSize: 16,
},
danger: {
marginTop: 24,
padding: 14,
borderRadius: 8,
borderWidth: 1,
borderColor: '#dc2626',
alignItems: 'center',
},
dangerText: {
color: '#dc2626',
fontWeight: '600',
},
link: {
color: '#2563eb',
fontSize: 16,
},
});