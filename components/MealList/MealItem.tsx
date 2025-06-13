import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { Meal } from "../../types/data";
import { RootStackParamList } from "../../types/navigation";
import MealDetails from "../MealDetails";
import { shadowStyle } from "../../globalStyles";

interface MealItemProps {
  mealData: Meal;
}

const MealItem = ({ mealData }: MealItemProps) => {
  const { title, complexity, duration, affordability, imageUrl, id } = mealData;
  // const navigation = useNavigation<NavigationProp<RootStackParamList>>(); //types for hooks
  // const route = useRoute<RouteProp<RootStackParamList, "MealDetail">>();  //RootStackParamList is defined in navigation.ts where defined all screens
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate("MealDetail", { mealId: id });
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) =>
          Platform.OS === "ios" && pressed && { opacity: 0.7 }
        }
        android_ripple={{ color: "#eee" }}
      >
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.title}>{title}</Text>
          <MealDetails {...{complexity, duration, affordability}}/>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    margin: 16,
    overflow: Platform.select({
      ios: "visible",
      android: "hidden",
      default: "visible",
    }),
    backgroundColor: "#ccc",
    ...shadowStyle,
  },
  innerContainer: {
    //ios specific because of shadows and and border radius
    borderRadius: 8,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    padding: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
});
