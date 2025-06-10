import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryBox from "../components/CategoryBox";
import { CATEGORIES } from "../data/dummy-data";

const StartScreen = () => {
  return (
    <View style={styles.rootScreen}>
      <ScrollView contentContainerStyle={styles.categoryContainer}>
        {CATEGORIES.map(category => {
          return (
            <CategoryBox title={category.title} id={category.id} color={category.color}/>
          )
        })}
      </ScrollView>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
});
