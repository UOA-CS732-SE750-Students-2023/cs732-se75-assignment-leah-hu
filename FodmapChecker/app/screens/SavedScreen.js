import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Text, List } from "react-native-paper";
import ListItem from "../components/ListItem";
import SaveContext from "../contexts/SaveContext";

function SavedScreen() {
  const { savedItems, handleSaveItem } = useContext(SaveContext);

  const highItems = savedItems.filter((item) => item.fodmap === "high");
  const lowItems = savedItems.filter((item) => item.fodmap === "low");

  function AccordionList({ items, level, id }) {
    return (
      <List.Accordion
        title={level}
        id={id}
        style={styles.list}
      >
        {items.map((item) => {
          const saved = savedItems.some((i) => i.id === item.id);
          return (
            <ListItem
              key={item.id}
              item={item}
              saved={saved}
              onSave={handleSaveItem}
            />
          );
        })}
      </List.Accordion>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Saved Foods</Text>
      <View style={styles.listView}>
        <List.AccordionGroup>
          <AccordionList items={highItems} level="High" id="1" />
          <AccordionList items={lowItems} level="Low" id="2" />
        </List.AccordionGroup>
      </View>
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
  listView: {
    margin: 20,
  },
});

export default SavedScreen;
