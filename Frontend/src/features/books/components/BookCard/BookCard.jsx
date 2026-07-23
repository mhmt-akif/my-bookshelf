import { View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import styles from "./styles"

export const BookCard = ({ title, author, coverColor, selected, onToggle }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.cover, { backgroundColor: coverColor }]}>
                <Ionicons name="book-outline" size={22} color="#FFFFFF" />
            </View>
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.author} numberOfLines={1}>{author}</Text>
            </View>
            <TouchableOpacity
                style={[styles.radio, selected && styles.radioSelected]}
                onPress={onToggle}
            />
        </View>
    )
}
