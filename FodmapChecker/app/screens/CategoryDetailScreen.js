import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, SafeAreaView, FlatList, Button } from "react-native";
import { Text, IconButton } from "react-native-paper";
import ListItem from "../components/ListItem";
import useFetchData from "../hooks/useFetchData";
import SaveContext from "../contexts/SaveContext";

function CategoryDetailScreen({ category, onBack }) {
  const { foodInfo } = useFetchData();
  const [filteredFoods, setFilteredFoods] = useState([]);
  const { savedItems, handleSaveItem } = useContext(SaveContext);

  useEffect(() => {
    if (foodInfo.length > 0) {
      const filtered = foodInfo.filter((item) => item.category === category);
      setFilteredFoods(filtered);
    }
  }, [foodInfo, category]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>{category}</Text>
      <IconButton 
        icon="arrow-left"
        size={30}
        onPress={onBack}
        style={styles.backButton}
      />
      <FlatList
        data={filteredFoods}
        renderItem={({ item }) => {
          const saved = savedItems.some((i) => i.id === item.id);
          return (
            <ListItem item={item} saved={saved} onSave={handleSaveItem} />
          );
        }}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  titleText: {
    paddingLeft: 20,
    paddingTop: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  listContainer: {
    padding: 10,
  },
  backButton: {
    paddingLeft: 15,
    paddingTop: 15,
  },
});

export default CategoryDetailScreen;
