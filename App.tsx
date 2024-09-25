import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./screens/HomeScreen";
import RecipieScreen from "./screens/RecipieScreen";

export type RootStackParamList = {
  Home: undefined;
  Recipie: { ageSpan: string };
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
        <RootStack.Screen name="Home" component={HomeScreen} options={{ title: 'Baby Recipes Home' }} />
        <RootStack.Screen name="Recipie" component={RecipieScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

