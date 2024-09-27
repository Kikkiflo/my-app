import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Image, StyleSheet, TouchableOpacity, Text, View, ImageBackground } from "react-native";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, 'Favorites'>;

export default function FavoritesScreen({ route, navigation }: Props) {

    return (
        <Text>Here are your favorites recipies</Text>
    );
}