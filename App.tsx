import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { DrawerParamList, RootStackParamList } from "./types/navigation";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesContextProvider } from "./store/context/FavoritesContext";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351201" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#3e2929" },
        drawerContentStyle: { backgroundColor: "#351201" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "black",
        drawerActiveBackgroundColor: "#7a5555",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351201" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3e2929" },
              // animation: "none", // For native stack
              }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                title: "All Categories",
                // header: () => (<></>)
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              // options={{
              //   headerRight: () => {
              //     return <Text>In the Header</Text>;
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
