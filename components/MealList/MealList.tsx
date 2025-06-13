import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";
import { Meal } from "../../types/data";

interface MealListProps {
  meals: Meal[];
}

const MealList = ({ meals }: MealListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={(meal) => {
          return <MealItem mealData={meal.item} />;
        }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
