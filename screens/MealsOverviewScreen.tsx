import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import { MealsOverviewScreenNavigationProps } from "../types/navigation";
import MealList from "../components/MealList/MealList";

const getCurrentMeals = (categoryId: string) => {
  return MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
};

const MealsOverviewScreen = ({
  route,
  navigation,
}: MealsOverviewScreenNavigationProps) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = getCurrentMeals(categoryId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.title });
  }, [navigation, route.params.title]);

  return <MealList meals={displayedMeals} />;
};

export default MealsOverviewScreen;

