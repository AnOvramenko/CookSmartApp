import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: {
    categoryId: string;
    title: string;
  };
}

// important: NativeStackNavigationProp defines only navigation prop
export type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MealsCategories'
>;

// important: NativeStackScreenProps defines both navigation and route
export type MealsOverviewScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'MealsOverview'
>;

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;