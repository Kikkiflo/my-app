import { useFavorites } from '../context/FavoritesContext';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity, Text, Image, View, ScrollView } from "react-native";
import { RootStackParamList } from "../App";
import { Audio } from 'expo-av';
import LottieView from 'lottie-react-native';
import { useRef, useState } from 'react';

const sixtoeightImage = require('../assets/6-8.png');
const sixtoeightagainImage = require('../assets/6-8igen.png');
const eightToTenImage = require('../assets/8-10.png');
const eightToTenAgainImage = require('../assets/8-10igen.png');
const tenToTwelveImage = require('../assets/10-12.png');
const tenToTwelveAgainImage = require('../assets/10-12igen.png');
const twelvePlusImage = require('../assets/12-18.png');
const twelvePlusAgainImage = require('../assets/12-18igen.png');
const laughSound = require('../assets/Adrianskratt.m4a');
const heartAnimation = require('../assets/heart.json');

type Props = NativeStackScreenProps<RootStackParamList, 'Recipes'>;

export default function RecipieScreen({ route, navigation }: Props) {
    const { ageSpan } = route.params;
    const { addToFavorites } = useFavorites();

    const [isLiked, setIsLiked] = useState<boolean[]>([]);
    const lottieRefs = useRef<(LottieView | null)[]>([]);

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

    const handlePressLike = async (source: any, index: number) => {
        addToFavorites(source);

        const { sound } = await Audio.Sound.createAsync(laughSound);
        await sound.playAsync();

        const updatedLikes = [...isLiked];
        updatedLikes[index] = true;
        setIsLiked(updatedLikes);

        if (lottieRefs.current[index]) {
            lottieRefs.current[index]?.play();
        }

        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded && status.didJustFinish) {
                sound.unloadAsync();
            }
        });

        setTimeout(() => {
            const resetLikes = [...isLiked];
            resetLikes[index] = false;
            setIsLiked(resetLikes);
        }, 2500);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>{message}</Text>
            {imageSources.map((source, index) => (
                <View key={index} style={styles.recipeContainer}>
                    <Image source={source} style={styles.recipeImage} resizeMode="stretch" />
                    <TouchableOpacity style={styles.likeButton} onPress={() => handlePressLike(source, index)}>
                        <Text style={styles.likeButtonText}>Gilla</Text>
                    </TouchableOpacity>

                    {isLiked[index] && (
                        <LottieView
                            ref={(ref) => (lottieRefs.current[index] = ref)}
                            source={heartAnimation}
                            autoPlay={false}
                            loop={false}
                            style={styles.lottieHeart}
                        />
                    )}
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
    recipeContainer: {
        width: 500,
        alignItems: 'center',
        marginBottom: 20,
    },
    recipeImage: {
        width: '60%',
        height: 800,
        borderRadius: 8,
    },
    likeButton: {
        backgroundColor: '#6ba16f',
        padding: 8,
        borderRadius: 4,
        marginTop: 5,
    },
    likeButtonText: {
        color: '#fff',
        fontSize: 16,
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
        color: '#fff',
        fontSize: 18,
    },
    lottieHeart: {
        width: 700,
        height: 700,
        position: 'absolute',
        bottom: '10%',
        zIndex: 10,
    },
});
