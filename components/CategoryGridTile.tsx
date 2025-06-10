import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { Category } from "../types/data";
import { useNavigation } from "@react-navigation/native";

interface CategoryGridTileProps extends Omit<Category, "id"> {
  onPress: (e: GestureResponderEvent) => void;
}

const CategoryGridTile = ({ color, title, onPress }: CategoryGridTileProps) => {

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,

    backgroundColor: "white",
    overflow: Platform.select({
      ios: "visible",
      android: "hidden",
      default: "visible",
    }),

    //ios
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
