import { TouchableOpacity, Text, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import styles from "./styles"

export const LogoutButton = () => {
    const navigation = useNavigation()

    const handleLogout = () => {
        Alert.alert(
            "Çıkış Yap",
            "Hesabından çıkış yapmak istediğinden emin misin?",
            [
                { text: "İptal", style: "cancel" },
                {
                    text: "Çıkış Yap",
                    style: "destructive",
                    onPress: () => navigation.navigate("SignIn"),
                },
            ]
        )
    }

    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={handleLogout}
            activeOpacity={0.8}
        >
            <Ionicons name="log-out-outline" size={20} color="#E05252" />
            <Text style={styles.text}>Çıkış Yap</Text>
        </TouchableOpacity>
    )
}
