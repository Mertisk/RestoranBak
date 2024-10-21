import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default function ResultsShowScreen({ route }) {
  const id = route.params.id;

  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  //bunu yazma sebebimiz baslangıcta ekrana id: result ı gelmiyor eğer result yoksa null dönsün => amaç data gelene kadar null dönsün
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 180,
    margin: 10,
    borderRadius: 20,
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginVertical: 10,
  },
  phone: {
    alignSelf: "center",
    fontSize: 20,
  },
});
