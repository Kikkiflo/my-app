import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity, Button, Text, Image, View } from "react-native";
import { RootStackParamList } from "../App";
import HomeScreen from "./HomeScreen";

type Props = NativeStackScreenProps<RootStackParamList, 'Recipes'>;

export default function RecipieScreen({ route, navigation }: Props) {
    const { ageSpan } = route.params;

    let message = "";
    let imageSource: string | null = null;

    switch (ageSpan) {
        case '0-6':
            message = "Babies younger than 6 months should only be fed breastmilk or milk formula.";
            imageSource = 'https://media.istockphoto.com/id/1275780939/vector/breastfeeding-line-icons-set-mother-breast-feeding-baby-powdered-milk-pump-sling-infant-food.jpg?s=612x612&w=0&k=20&c=6Q2Hd806vlO3A6nEub9811eEjtkGbVCkMSv73rCn2Lw=';
            break;
        case '6-8':
            message = "Babies 6 to 8 months old can start with purees and soft foods. Here are some recipes:";
            imageSource = '';
            break;
        case '8-10':
            message = "Babies 8 to 10 months old can handle more textured foods. Here are some recipes:";
            imageSource = '';
            break;
        case '10-12':
            message = "Babies 10 to 12 months old can eat small pieces of soft food. Here are some recipes:";
            imageSource = '';
            break;
        case '12-18':
            message = "Babies over 12 months can eat most foods, but avoid choking hazards. Here are some recipes:";
            imageSource = '';
            break;
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{message}</Text>
            {imageSource && (
                <Image source={{ uri: imageSource }} style={styles.recipeImage} resizeMode="contain" />
            )}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Go back to Home</Text>
            </TouchableOpacity>
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#6ba195',
        padding: 12,
        borderRadius: 8,
        marginVertical: 8,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#3a5243',
        fontSize: 18,
    },
    recipeImage: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
});
