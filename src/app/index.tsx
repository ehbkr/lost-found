import ItemCard from '@/components/ItemCard';
import { Item } from '@/types';
import { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function Index() {
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');

  const canAdd = title.trim() !== '' && place.trim() !== '';

  function addItem() {
    if (!canAdd) return;

    const newItem: Item = {
      id: Date.now().toString(),
      title: title.trim(),
      place: place.trim(),
    };

    setItems((currentItems) => [newItem, ...currentItems]);
    setTitle('');
    setPlace('');
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCard title={item.title} place={item.place} />
        )}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={
          <View>
            {/* App header */}
            <View style={styles.topHeader}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>F</Text>
              </View>
              <View style={styles.brandText}>
                <Text style={styles.appName}>FindIt</Text>
                <Text style={styles.tagline}>
                  Lost something? Found something?
                </Text>
              </View>
            </View>

            {/* Welcome banner */}
            <View style={styles.hero}>
              <Text style={styles.eyebrow}>COMMUNITY BOARD</Text>
              <Text style={styles.heroTitle}>
                Every lost item deserves a way home.
              </Text>
              <Text style={styles.heroDescription}>
                Report a found item and help reunite it with its owner.
              </Text>
              <Text style={styles.heroFooter}>
                ♥  Small actions. Real connections.
              </Text>
            </View>

            {/* Report form */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                Report a found item
              </Text>
            </View>

            <View style={styles.form}>
              <Text style={styles.label}>Item name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Blue water bottle"
                placeholderTextColor="#94A3B8"
                value={title}
                onChangeText={setTitle}
                returnKeyType="next"
              />

              <Text style={styles.label}>Location found</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Library, 2nd floor"
                placeholderTextColor="#94A3B8"
                value={place}
                onChangeText={setPlace}
                returnKeyType="done"
                onSubmitEditing={addItem}
              />

              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  !canAdd && styles.buttonDisabled,
                  pressed && canAdd && styles.buttonPressed,
                ]}
                onPress={addItem}
                disabled={!canAdd}
              >
                <Text style={styles.buttonText}>
                  +  Report found item
                </Text>
              </Pressable>
            </View>

            {/* Reports heading */}
            <View style={styles.reportsHeader}>
              <Text style={styles.sectionTitle}>Recent reports</Text>
              <View style={styles.countBadge}>
                <Text style={styles.countText}>
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </Text>
              </View>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <View style={styles.emptyIcon}>
              <Text style={styles.emptyEmoji}>⌕</Text>
            </View>
            <Text style={styles.emptyTitle}>No reports yet</Text>
            <Text style={styles.emptyDescription}>
              Found something useful? Add the first report and
              help someone find it.
            </Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
    flexGrow: 1,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
    gap: 12,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#12304A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
  },
  brandText: {
    flex: 1,
  },
  appName: {
    fontSize: 23,
    fontWeight: '800',
    color: '#12304A',
    letterSpacing: -0.5,
  },
  tagline: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 3,
  },
  hero: {
    backgroundColor: '#12304A',
    borderRadius: 22,
    padding: 22,
    marginBottom: 26,
  },
  eyebrow: {
    color: '#70E0C0',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    lineHeight: 34,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  heroDescription: {
    color: '#D4E2ED',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },
  heroFooter: {
    color: '#70E0C0',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 18,
  },
  sectionHeader: {
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#12304A',
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  form: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 20,
    marginBottom: 28,
    gap: 10,
    borderWidth: 1,
    borderColor: '#E5ECF3',
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
    marginTop: 3,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#DCE5EE',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 15,
    color: '#12304A',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#0D9488',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  buttonDisabled: {
    backgroundColor: '#A8C9C5',
  },
  buttonPressed: {
    backgroundColor: '#0F766E',
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 15,
  },
  reportsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  countBadge: {
    backgroundColor: '#DDF5ED',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  countText: {
    color: '#087F67',
    fontSize: 12,
    fontWeight: '700',
  },
  emptyState: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5ECF3',
    padding: 26,
    alignItems: 'center',
    marginTop: 2,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EAF4F8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  emptyEmoji: {
    fontSize: 42,
    lineHeight: 48,
    color: '#387C91',
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#12304A',
    marginBottom: 8,
  },
  emptyDescription: {
    color: '#64748B',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
  },
  separator: {
    height: 12,
  },
});