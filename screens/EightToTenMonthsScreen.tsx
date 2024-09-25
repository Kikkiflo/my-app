import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Button, Text, View } from "react-native";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, 'EightToTenMonths'>;

export default function EightToTenMonthsScreen({ route, navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text>Recipes for babies 8 to 10 months</Text>
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
