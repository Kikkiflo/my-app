import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity, Text, Image, View, ScrollView } from "react-native";
import { RootStackParamList } from "../App";

const sixtoeightImage = require('../assets/6-8.png');
const sixtoeightagainImage = require('../assets/6-8igen.png');
const eightToTenImage = require('../assets/8-10.png');
const eightToTenAgainImage = require('../assets/8-10igen.png');
const tenToTwelveImage = require('../assets/10-12.png');
const tenToTwelveAgainImage = require('../assets/10-12igen.png');
const twelvePlusImage = require('../assets/12-18.png');
const twelvePlusAgainImage = require('../assets/12-18igen.png');

type Props = NativeStackScreenProps<RootStackParamList, 'Recipes'>;

export default function RecipieScreen({ route, navigation }: Props) {
    const { ageSpan } = route.params;

    let message = "";
    let imageSources: any[] = [];

    switch (ageSpan) {
        case '0-6':
            message = "Bröstmjölken eller modersmjölksersättningen ger all näring barnet behöver under hela första halvåret";
            break;
        case '6-8':
            message = "Bebisar 6-8 månader kan börja med pureér. Här är några recept:";
            imageSources.push(sixtoeightImage, sixtoeightagainImage);
            break;
        case '8-10':
            message = "Bebisar 8-10 månader kan börja med mer texurerad mat. Här är några recept:";
            imageSources.push(eightToTenImage, eightToTenAgainImage);
            break;
        case '10-12':
            message = "Bebisar 10 till 12 månader kan börja äta små bitar av mjuk mat. Här är några recept:";
            imageSources.push(tenToTwelveImage, tenToTwelveAgainImage);
            break;
        case '12-18':
            message = "Bebisar över 12 månader kan äta de flesta livsmedel, men undvik kvävningsrisker. Här är några recept:";
            imageSources.push(twelvePlusImage, twelvePlusAgainImage);
            break;
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>{message}</Text>
            {imageSources.map((source, index) => (
                <View key={index} style={styles.imageContainer}>
                    <Image source={source} style={styles.recipeImage} resizeMode="stretch" />
                </View>
            ))}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Tillbaka</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: "#6ba195",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        textAlign: 'center',
    },
    imageContainer: {
        width: 500, // Fast bredd för varje bild
        alignItems: 'center',
        marginBottom: 30,
    },
    recipeImage: {
        width: '40%', // Gör bilden lika bred som containern
        height: 600, // Fast höjd för att hålla dem jämna
        borderRadius: 8, // Stilar
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
});
