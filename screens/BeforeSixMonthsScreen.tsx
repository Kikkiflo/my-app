import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Button, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import HomeScreen from "./HomeScreen";

type Props = NativeStackScreenProps<RootStackParamList, 'BeforeSixMonths'>;

export default function BeforeSixMonthsScreen({ route, navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text>Babies younger than 6 month should only be feed breastmilk or milkformula</Text>
            <Button title="Go back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
