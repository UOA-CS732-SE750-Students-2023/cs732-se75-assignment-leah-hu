import React from "react";
import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import ListItem from "../components/ListItem";
import useFetchData from "../hooks/useFetchData";
import SaveContext from "../contexts/SaveContext";

// The search screen compoent for searching food FODMAP level
function SearchScreen() {
  const [matchedResults, setMatchedResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { savedItems, handleSaveItem } = useContext(SaveContext);
  const {foodInfo, setFoodInfo} = useFetchData();

  useEffect(() => {
    searchFood();
  }, [searchText]);

  // Get the matched results from the foodInfo array based on the search query
  function searchFood() {
    if (searchText === "") {
      setMatchedResults([]);
      return;
    }
    const results = foodInfo.filter((food) => {
      const words = food.name.toLowerCase().split(" ");
      const searchTextLower = searchText.toLowerCase();

      if (words[0].startsWith(searchTextLower)) {
        return true;
      }

      for (let i = 1; i < words.length; i++) {
        if (words[i].startsWith(searchTextLower)) {
          return true;
        }
      }

      return false;
    });
    setMatchedResults(results);
  }

  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.titleText}>FODMAP LEVEL</Text>
      <View>
        <Searchbar
          style={styles.searchBox}
          placeholder="Search for food..."
          onChangeText={(text) => {
            setSearchText(text);
          }}
          value={searchText}
        />
      </View>
      <FlatList
        data={matchedResults}
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
  background: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  titleText: {
    paddingLeft: 30,
    paddingTop: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  searchBox: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 10,
    margin: 20,
  },
  listContainer: {
    padding: 10,
  },
});

export default SearchScreen;
