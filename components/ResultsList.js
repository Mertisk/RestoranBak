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

export default function ResultsList({ title, results }) {
  return (
    <View>
      <Text>{title}</Text>
      <FlatList
        data={results}
        renderItem={({ item }) => {
          // item = { item: { name: 'Restoran A', price: '₺' }, index: 0, separators: ... }
          return (
            <TouchableOpacity>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
