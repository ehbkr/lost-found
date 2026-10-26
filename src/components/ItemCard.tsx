import { StyleSheet, Text, View } from 'react-native';
type Props = {
title: string;
place: string;
claimed: boolean;
};
export default function ItemCard({ title, place, claimed }: Props) {
return (
<View style={[styles.card, claimed && styles.cardClaimed]}>
<Text style={styles.title}>{title}</Text>
<Text style={styles.place}>📍 {place}</Text>
{claimed && <Text style={styles.badge}>✓ Claimed</Text>}
</View>
);
}
const styles = StyleSheet.create({
card: {
backgroundColor: '#ffffff',
borderRadius: 12,
padding: 16,
borderWidth: 1,
borderColor: '#e5e7eb',
},
cardClaimed: {
opacity: 0.6,
},
title: {
fontSize: 18,
fontWeight: '600',
},
place: {
marginTop: 4,
color: '#6b7280',
},
badge: {
marginTop: 8,
color: '#047857',
fontWeight: '600',
},
});