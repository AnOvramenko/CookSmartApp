import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Category } from "../types/data";

interface CategoryBoxProps extends Category {}

const CategoryBox = ({ color, title }: CategoryBoxProps) => {
  return (
    <View style={[styles.categoryContainer, { backgroundColor: color }]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default CategoryBox;

const styles = StyleSheet.create({
  categoryContainer: {
    // flex: 1,
    width: 180,
    height: 200,
    alignItems: "center",
    justifyContent: "center",

    padding: 24,
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
