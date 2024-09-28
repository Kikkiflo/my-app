import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import RecipieScreen from "./screens/RecipieScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

export type RootStackParamList = {
  Home: undefined;
  Recipes: { ageSpan: string };
  Favorites: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#6ba16f' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <RootStack.Screen name="Home" component={HomeScreen} options={{ title: 'Hem' }} />
        <RootStack.Screen name="Recipes" component={RecipieScreen} options={{ title: 'Recept' }} />
        <RootStack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favoriter' }} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
}

