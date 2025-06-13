import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from "@react-navigation/native";
import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from "@react-navigation/drawer";

export type RootStackParamList = {
  Drawer: undefined;
  MealsOverview: {
    categoryId: string;
    title: string;
  };
  MealDetail: {
    mealId: string;
  };
};

export type DrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
};

export type DrawerNavigationProps = CompositeNavigationProp<
  DrawerNavigationProp<DrawerParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type CategoriesScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, 'Categories'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type FavoritesScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, 'Favorites'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type MealsOverviewScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsOverview"
>;

export type MealDetailScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "MealDetail"
>;

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

