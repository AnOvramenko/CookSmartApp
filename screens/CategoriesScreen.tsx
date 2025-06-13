import { FlatList, ListRenderItemInfo } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
// import { CategoriesScreenNavigationProp } from "../types/navigation";
import Category from "../models/category";
import { CategoriesScreenProps } from "../types/navigation";

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const renderItemHandler = (categoryData: ListRenderItemInfo<Category>) => {
    const handlePress = () => {
      navigation.navigate("MealsOverview", {
        categoryId: categoryData.item.id,
        title: categoryData.item.title,
      });
    };

    return (
      <CategoryGridTile
        color={categoryData.item.color}
        title={categoryData.item.title}
        onPress={handlePress}
      />
    );
  };

  return (
    <>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItemHandler}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </>
  );
};

export default CategoriesScreen;