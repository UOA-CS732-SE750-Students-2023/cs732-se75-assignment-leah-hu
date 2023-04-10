import React from "react";
import { View, Text, StyleSheet } from "react-native";

function FodmapLevel({ level }) {
  const isHigh = level === "high";
  const backgroundColor = isHigh ? "#D0342C" : "#2D8A44";
  const textColor = "#FFFFFF";

  return (
    <View style={[styles.fodmapLevelContainer, { backgroundColor }]}>
      <Text style={[styles.fodmapLevelText, { color: textColor }]}>
        {isHigh ? "High" : "Low"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    fodmapLevelContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        width: 50,
        alignItems: "center",
      },
      fodmapLevelText: {
        fontWeight: "bold",
      },
})

export default FodmapLevel;