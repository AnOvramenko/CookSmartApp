import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MealDetailScreenNavigationProps } from "../types/navigation";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { Meal } from "../types/data";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/FavoritesContext";

const MealDetailScreen = ({
  route,
  navigation,
}: MealDetailScreenNavigationProps) => {
  const mealId = route.params.mealId;
  const mealData = MEALS.find((meal) => meal.id === mealId);
  const mealDetails = {
    affordability: mealData?.affordability,
    complexity: mealData?.complexity,
    duration: mealData?.duration,
  } as Pick<Meal, "affordability" | "duration" | "complexity">;

  const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext)
  const isFavorite = ids.includes(mealId);
  const headerButtonHandler = () => {
    return isFavorite ? removeFavorite(mealId) : addFavorite(mealId);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealData?.title,
      headerRight: () => (
        <IconButton
          onPress={headerButtonHandler}
          ionIcon={isFavorite ? 'star' : 'star-outline'}
          color="white"
        />
      ),
    });
  }, [navigation, isFavorite]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: mealData?.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mealData?.title}</Text>
      <MealDetails {...mealDetails} textStyle={styles.detailText} />

      <View style={styles.info}>
        <Subtitle>Ingredients</Subtitle>
        <List mealList={mealData?.ingredients as string[]} />

        <Subtitle>Steps</Subtitle>
        <List mealList={mealData?.steps as string[]} />
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  info: {
    marginHorizontal: 48,
  },
});
