import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity, Text, ScrollView, Image, View } from "react-native";
import { RootStackParamList } from "../App";
import { Audio } from 'expo-av';
import { useFavorites } from '../context/FavoritesContext';

const angrySound = require('../assets/Adrianarg.m4a');

type Props = NativeStackScreenProps<RootStackParamList, 'Favorites'>;

export default function FavoritesScreen({ route }: Props) {
    const { favorites, removeFromFavorites } = useFavorites();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Mina favoritrecept</Text>
            {favorites && favorites.length > 0 ? (
                favorites.map((source: any, index: number) => (
                    <View key={index} style={styles.recipeContainer}>
                        <Image source={source} style={styles.recipeImage} resizeMode="stretch" />

                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={async () => {
                                removeFromFavorites(source);
                                const { sound } = await Audio.Sound.createAsync(angrySound);
                                await sound.playAsync();

                                sound.setOnPlaybackStatusUpdate((status) => {
                                    if (status.isLoaded && status.didJustFinish) {
                                        sound.unloadAsync();  // Frigör resurser efter uppspelning
                                    }
                                });
                            }}
                        >
                            <Text style={styles.removeButtonText}>Sluta gilla</Text>
                        </TouchableOpacity>
                    </View>
                ))
            ) : (
                <Text style={styles.noFavoritesText}>Inga favoriter än!</Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#6ba195',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
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
    noFavoritesText: {
        color: '#fff',
        fontSize: 18,
    },
    removeButton: {
        backgroundColor: '#c94d34',
        padding: 8,
        borderRadius: 4,
        marginTop: 5,
    },
    removeButtonText: {
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
});
