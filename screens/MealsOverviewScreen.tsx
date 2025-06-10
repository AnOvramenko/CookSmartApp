import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import { MealsOverviewScreenNavigationProps } from "../types/navigation";
import { Meal } from "../types/data";
import MealItem from "../components/MealItem";

const getCurrentMeals = (categoryId: string) => {
  return MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
};

const MealsOverviewScreen = ({ route }: MealsOverviewScreenNavigationProps) => {
  // const route = useRoute();  // another way how to get route, additionally should provide generic where specified the props that you can get
  const categoryId = route.params.categoryId;
  const displayedMeals = getCurrentMeals(categoryId);

  const renderMealItem = (meal: ListRenderItemInfo<Meal>) => {
     return <MealItem title={meal.item.title}/>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
