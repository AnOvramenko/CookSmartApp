import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import React from "react";

interface MealDetailsProps {
  duration: number;
  complexity: string;
  affordability: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

const MealDetails = ({affordability, complexity, duration, textStyle, style}: MealDetailsProps) => {
  return (
    <View style={[styles.specsContainer, style]}>
      <Text style={[styles.specs, textStyle]}>{duration}m</Text>
      <Text style={[styles.specs, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.specs, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  specsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
  },
  specs: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});
