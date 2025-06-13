import React, { useContext } from "react";
import { FavoritesContext } from "../store/context/FavoritesContext";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";
import { StyleSheet, Text, View } from "react-native";


const FavoritesScreen = () => {
  const { ids } = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (!favoriteMeals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList meals={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
});
