import { View, Text, TouchableOpacity, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import styles from "./styles"
import { useDispatch } from "react-redux"
import { toggleReadStatus } from "../../../../app/store/bookSlice"

export const BookCard = ({ id, title, author, coverColor, coverImage, selected, onPress }) => {

    const dispatch = useDispatch();
    const handleReadPress = () => {
        dispatch(toggleReadStatus(id))
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
            <View style={[styles.cover, { backgroundColor: coverColor, overflow: 'hidden' }]}>
                {coverImage ? (
                    <Image source={{ uri: coverImage }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                ) : (
                    <Ionicons name="book-outline" size={22} color="#FFFFFF" />
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
