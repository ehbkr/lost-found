import { useItems } from '@/context/ItemsContext';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
export default function AddScreen() {
const { addItem } = useItems();
const [title, setTitle] = useState('');
const [place, setPlace] = useState('');
const canSave = title.trim() !== '' && place.trim() !== '';
function save() {
if (!canSave) return;
addItem({ title: title.trim(), place: place.trim() });
router.back();
}
return (
<View style={styles.screen}>
<TextInput
style={styles.input}
placeholder="What did you find?"
value={title}
onChangeText={setTitle}
/>
<TextInput
style={styles.input}
placeholder="Where?"
value={place}
onChangeText={setPlace}
/>
<Pressable
style={[styles.button, !canSave && styles.buttonDisabled]}
onPress={save}
disabled={!canSave}
>
<Text style={styles.buttonText}>Save</Text>
</Pressable>
</View>
);
}
const styles = StyleSheet.create({
screen: {
flex: 1,
padding: 16,
gap: 8,
},
input: {
backgroundColor: '#ffffff',
borderWidth: 1,
borderColor: '#d1d5db',
borderRadius: 8,
padding: 12,
fontSize: 16,
},
button: {
backgroundColor: '#2563eb',
borderRadius: 8,
padding: 14,
alignItems: 'center',
},
buttonDisabled: {
opacity: 0.4,
},
buttonText: {
color: '#ffffff',
fontWeight: '600',
fontSize: 16,
},
});
