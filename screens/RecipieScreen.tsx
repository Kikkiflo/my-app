import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Button, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import HomeScreen from "./HomeScreen";

type Props = NativeStackScreenProps<RootStackParamList, 'Recipie'>;

export default function RecipieScreen({ route, navigation }: Props) {
    const { ageSpan } = route.params;

    let message = "";

    switch (ageSpan) {
        case '0-6':
            message = "Babies younger than 6 months should only be fed breastmilk or milk formula.";
            break;
        case '6-8':
            message = "Babies 6 to 8 months old can start with purees and soft foods.";
            break;
        case '8-10':
            message = "Babies 8 to 10 months old can handle more textured foods.";
            break;
        case '10-12':
            message = "Babies 10 to 12 months old can eat small pieces of soft food.";
            break;
        case '12-18':
            message = "Babies over 12 months can eat most foods, but avoid choking hazards.";
            break;
        default:
            message = "Age group not specified.";
            break;
    }


    return (
        <View style={styles.container}>
            <Text>{message}</Text>
            <Button title="Go back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6ba195",
        alignItems: "center",
        justifyContent: "center",
    },
});
