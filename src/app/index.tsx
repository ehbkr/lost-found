import ItemCard from '@/components/ItemCard';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ItemCard title="Blue water bottle" place="Library, 2nd floor" />
      <ItemCard title="Student card" place="Cafeteria" />
      <Text>Lost & Found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
