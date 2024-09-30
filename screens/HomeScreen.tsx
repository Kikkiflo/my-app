import { useState } from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground } from "react-native";
import { RootStackParamList } from "../App";
import * as Haptics from 'expo-haptics';

const backgroundImage = require('../assets/Baby.png');

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: HomeProps) {
    const [favorites, setFavorites] = useState<any[]>([]);
    const handlePress = () => {
        Haptics.selectionAsync();
    };
    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background} imageStyle={{ opacity: 0.7 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Välj ålderskategori</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handlePress();
                        navigation.navigate('Recipes', { ageSpan: '0-6' })
                    }}
                >
                    <Text style={styles.buttonText}>Yngre än 6 månader</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handlePress(); navigation.navigate('Recipes', { ageSpan: '6-8' })
                    }}
                >
                    <Text style={styles.buttonText}>6 till 8 månader</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handlePress(); navigation.navigate('Recipes', { ageSpan: '8-10' })
                    }}
                >
                    <Text style={styles.buttonText}>8 till 10 månader</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handlePress(); navigation.navigate('Recipes', { ageSpan: '10-12' })
                    }}
                >
                    <Text style={styles.buttonText}>10 till 12 månader</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handlePress(); navigation.navigate('Recipes', { ageSpan: '12-18' })
                    }}
                >
                    <Text style={styles.buttonText}>12 till 18 månader</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handlePress(); navigation.navigate('Favorites')
                    }}
                >
                    <Text style={styles.buttonText}>Mina favoriter</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
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