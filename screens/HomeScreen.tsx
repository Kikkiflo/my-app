import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Image, StyleSheet, TouchableOpacity, Text, View, ImageBackground } from "react-native";
import { RootStackParamList } from "../App";
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';

const backgroundImage = require('../assets/Baby.png');


type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: HomeProps) {
    const handlePress = () => {
        Haptics.selectionAsync();
    };
    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background} imageStyle={{ opacity: 0.7 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Select your baby's age group</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handlePress();
                        navigation.navigate('Recipie', { ageSpan: '0-6' })
                    }}
                >
                    <Text style={styles.buttonText}>Younger than 6 months</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handlePress(); navigation.navigate('Recipie', { ageSpan: '6-8' })
                    }}
                >
                    <Text style={styles.buttonText}>6 to 8 months</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handlePress(); navigation.navigate('Recipie', { ageSpan: '8-10' })
                    }}
                >
                    <Text style={styles.buttonText}>8 to 10 months</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handlePress(); navigation.navigate('Recipie', { ageSpan: '10-12' })
                    }}
                >
                    <Text style={styles.buttonText}>10 to 12 months</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handlePress(); navigation.navigate('Recipie', { ageSpan: '12-18' })
                    }}
                >
                    <Text style={styles.buttonText}>12 to 18 months</Text>
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