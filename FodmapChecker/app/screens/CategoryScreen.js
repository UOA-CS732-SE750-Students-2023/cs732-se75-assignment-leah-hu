import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { List, Text } from "react-native-paper";
import useFetchData from "../hooks/useFetchData";
import CategoryDetailScreen from "./CategoryDetailScreen";

function CategoryScreen() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { foodInfo, setFoodInfo } = useFetchData();

  useEffect(() => {
    if (foodInfo.length > 0) {
      const uniqueCategories = Array.from(
        new Set(foodInfo.map((item) => item.category))
      );
      setCategories(uniqueCategories);
    }
  }, [foodInfo]);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const handleBackPress = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    return (
      <CategoryDetailScreen
        category={selectedCategory}
        onBack={handleBackPress}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item)}>
            <List.Item title={item} style={styles.listItem} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
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
  listItem: {
    marginBottom: 8,
  },
});

export default CategoryScreen;
