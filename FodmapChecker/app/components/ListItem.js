import React from "react";
import { View, StyleSheet } from "react-native";
import { List, IconButton } from "react-native-paper";
import FodmapLevel from "./FodmapLevel";

function ListItem({ item, saved, onSave }) {
  const handleSave = () => {
    onSave(item);
  };

  return (
    <List.Item
      title={item.name}
      right={() => (
        <View style={styles.rightContainer}>
          <FodmapLevel level={item.fodmap} />
          <IconButton
            icon={saved ? "bookmark" : "bookmark-outline"}
            color="#007BFF"
            size={20}
            onPress={() => handleSave()}
            style={styles.saveIcon}
          />
        </View>
      )}
      style={styles.item}
      titleStyle={styles.title}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 8,
  },
  title: {
    fontWeight: "bold",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  saveIcon: {
    marginRight: -10,
  },
});

export default ListItem;
