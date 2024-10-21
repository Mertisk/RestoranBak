import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import ResultDetail from "./ResultDetail";
import { useNavigation } from "@react-navigation/native";
useNavigation;

export default function ResultsList({ title, results }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          // item = { item: { name: 'Restoran A', price: '₺' }, index: 0, separators: ... }
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ResultsShow", { id: item.id });
              }}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});
