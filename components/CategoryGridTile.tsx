import {
  StyleSheet,
  Text,
  View,
  Platform,
  GestureResponderEvent,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Category } from "../types/data";
import { shadowStyle } from "../globalStyles";

interface CategoryGridTileProps extends Omit<Category, "id"> {
  onPress: (e: GestureResponderEvent) => void;
}

const CategoryGridTile = ({ color, title, onPress }: CategoryGridTileProps) => {

  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button
          }
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
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

    backgroundColor: "white",
    overflow: Platform.select({
      ios: "visible",
      android: "hidden",
      default: "visible",
    }),
    ...shadowStyle,
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
