import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, ScrollView, Image, View } from "react-native";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, 'Favorites'>;

export default function FavoritesScreen({ route }: Props) {
    const favorites = route.params?.favorites || [];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Mina favoritrecept</Text>
            {favorites && favorites.length > 0 ? (
                favorites.map((source: any, index: number) => (
                    <Image key={index} source={source} style={styles.recipeImage} resizeMode="stretch" />
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
    recipeImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    noFavoritesText: {
        color: '#fff',
        fontSize: 18,
    },
});