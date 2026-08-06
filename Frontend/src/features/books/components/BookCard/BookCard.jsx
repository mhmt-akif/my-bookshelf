import { View, Text, TouchableOpacity, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import styles from "./styles"
import { useToggleReadStatus } from "../../hooks/useToggleReadStatus"

export const BookCard = ({ id, title, author, coverColor, coverImage, selected, onPress }) => {

    const { handleToggleRead } = useToggleReadStatus();
    const handleReadPress = () => {
        handleToggleRead(id, selected)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
            <View style={[styles.cover, { overflow: 'hidden' }]}>
                {coverImage ? (
                    <Image source={{ uri: coverImage }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                ) : (
                    <LinearGradient
                        colors={coverColor ? [coverColor, coverColor] : ["#E3A87C", "#C7753D"]}
                        style={styles.coverPlaceholder}
                    >
                        <Ionicons name="book" size={22} color="#FFFFFF" />
                    </LinearGradient>
                )}
            </View>
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.author} numberOfLines={1}>{author}</Text>
            </View>
            <TouchableOpacity
                style={[styles.radio, selected && styles.radioSelected]}
                onPress={handleReadPress}
            />
        </TouchableOpacity>
    )
}
