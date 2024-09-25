import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, Button, View } from "react-native";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, 'TenToTwelveMonths'>;

export default function TenToTwelveMonthsScreen({ route, navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text>Recipes for babies 10 to 12 months</Text>
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
