import { View, Text, TouchableOpacity, Animated, Image } from "react-native"
import { useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as ImagePicker from "expo-image-picker"
import { Ionicons } from "@expo/vector-icons"
import styles from "./styles"
import { useProfileImage } from "../../hooks/useProfileImage"

export const ProfileHeader = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current
    const slideAnim = useRef(new Animated.Value(24)).current
    const dispatch = useDispatch()
    const { updateProfileImage } = useProfileImage()
    const profileImage = useSelector((state) => state.user.profileImage)
    const favoriteGenres = useSelector((state) => state.user.favoriteGenres)
    const {user}=useSelector((state)=>state.auth);

    const email=user?.email ||"deneme@ornek.com"
    const full_name=user?.user_metadata?.full_name ||"Deneme Kullanıcı"
    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 550,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 450,
                useNativeDriver: true,
            }),
        ]).start()
    }, [])

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });

        if (!result.canceled) {
            updateProfileImage(result.assets[0].uri);
        }
    };

    const booksList = useSelector((state) => state.books.booksList) || []
    const totalBooksCount = booksList.length
    const readBooksCount = booksList.filter((b) => b.isRead).length

    return (
        <Animated.View
            style={[
                styles.container,
                { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
            ]}
        >
            {/* Avatar */}
            <TouchableOpacity style={styles.avatarWrapper} activeOpacity={0.85} onPress={pickImage}>
                <View style={styles.avatarBg}>
                    {profileImage ? (
                        <Image source={{ uri: profileImage }} style={styles.avatarImage} />
                    ) : (
                        <Text style={styles.avatarText}>{full_name.split(' ').map(n => n[0]).join('')}</Text>
                    )}
                </View>
                <View style={styles.editBadge}>
                    <Ionicons name="camera" size={10} color="#fff" />
                </View>
            </TouchableOpacity>

            <Text style={styles.userName}>{full_name}</Text>
            <Text style={styles.userEmail}>{email}</Text>

            {/* Stats */}
            <View style={styles.statsRow}>
                <StatItem value={totalBooksCount.toString()} label="Toplam Kitap" />
                <View style={styles.statDivider} />
                <StatItem value={readBooksCount.toString()} label="Okunan" />
                <View style={styles.statDivider} />
                <StatItem value={favoriteGenres.length.toString()} label="Favori Tür" />
            </View>
        </Animated.View>
    )
}

const StatItem = ({ value, label }) => (
    <View style={styles.statCard}>
        <Text style={styles.statNum}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
    </View>
)
