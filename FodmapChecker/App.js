import React, { useState, useEffect } from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  BottomNavigation,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchScreen from "./app/screens/SearchScreen";
import CategoryScreen from "./app/screens/CategoryScreen";
import SavedScreen from "./app/screens/SavedScreen";
import SaveContext from "./app/contexts/SaveContext";

// Define the theme colors
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000000",
    secondaryContainer: "#f1f1f1",
  },
};

// The app function component is the root of this app
export default function App() {
  const [savedItems, setSavedItems] = useState([]);
  const [navIndex, setNavIndex] = useState(0);

  useEffect(() => {
    loadSavedItems();
  }, []);

  // Load the saved items from local storage
  async function loadSavedItems() {
    try {
      const storedItems = await AsyncStorage.getItem("savedItems");
      if (storedItems !== null) {
        setSavedItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error(error);
    }
  }

  // The function to save or delete an item from saved list
  async function handleSaveItem(item) {
    const itemIndex = savedItems.findIndex((i) => i.id === item.id);
    let updatedSavedItems;
    if (itemIndex >= 0) {
      updatedSavedItems = savedItems.filter((_, index) => index !== itemIndex);
    } else {
      updatedSavedItems = [...savedItems, item];
    }

    try {
      await AsyncStorage.setItem(
        "savedItems",
        JSON.stringify(updatedSavedItems)
      );
      setSavedItems(updatedSavedItems);
    } catch (error) {
      console.error(error);
    }
  }

  const routes = [
    { key: "search", title: "Search", focusedIcon: "magnify" },
    {
      key: "category",
      title: "Category",
      focusedIcon: "format-list-bulleted",
    },
    {
      key: "saved",
      title: "Saved",
      focusedIcon: "bookmark",
      unfocusedIcon: "bookmark-outline",
    },
  ];

  const renderScene = BottomNavigation.SceneMap({
    search: SearchScreen,
    category: CategoryScreen,
    saved: SavedScreen,
  });

  return (
    <SaveContext.Provider value={{ savedItems, handleSaveItem }}>
      <PaperProvider theme={theme}>
        <BottomNavigation
          navigationState={{ index: navIndex, routes }}
          onIndexChange={setNavIndex}
          renderScene={renderScene}
          barStyle={{ backgroundColor: "#fff" }}
        />
      </PaperProvider>
    </SaveContext.Provider>
  );
}
