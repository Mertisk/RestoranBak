import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function SearchBar({ term, onChangeTerm, onTermSubmit }) {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign
        style={styles.iconStyle}
        name="search1"
        size={30}
        color="black"
      />
      <TextInput
        placeholder="Ara"
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onChangeTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    height: 50,
    borderRadius: 20,
  },
  iconStyle: {
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1, //kalan yeri oldugu gibi kaplar
    fontSize: 18,
  },
});
