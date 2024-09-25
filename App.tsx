import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import BeforeSixMonthsScreen from "./screens/BeforeSixMonthsScreen"
import SixToEightMonthsScreen from "./screens/SixToEightMonthsScreen"
import EightToTenMonthsScreen from "./screens/EightToTenMonthsScreen"
import TenToTwelveMonthsScreen from "./screens/TenToTwelveMonthsScreen"
import OverTwelveMonthsScreen from "./screens/OverTwelveMonthsScreen"
import HomeScreen from "./screens/HomeScreen";

export type RootStackParamList = {
  Home: undefined;
  BeforeSixMonths: undefined;
  SixToEightMonths: undefined;
  EightToTenMonths: undefined;
  TenToTwelveMonths: undefined;
  OverTwelveMonths: undefined;
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
        <RootStack.Screen name="BeforeSixMonths" component={BeforeSixMonthsScreen} options={{ title: '<6 months' }} />
        <RootStack.Screen name="SixToEightMonths" component={SixToEightMonthsScreen} options={{ title: '6 to 8 months' }} />
        <RootStack.Screen name="EightToTenMonths" component={EightToTenMonthsScreen} options={{ title: '8 to 10 months' }} />
        <RootStack.Screen name="TenToTwelveMonths" component={TenToTwelveMonthsScreen} options={{ title: '10 to 12 months' }} />
        <RootStack.Screen name="OverTwelveMonths" component={OverTwelveMonthsScreen} options={{ title: '>12 months' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

