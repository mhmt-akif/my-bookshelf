import { View, Text, TouchableOpacity } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

export const Footer = ({
    text = "Zaten hesabın var mı?",
    linkText = "Giriş yap",
    targetScreen = "SignIn",
    onPress
}) => {
    const navigation = useNavigation()

    const handlePress = () => {
        if (onPress) {
            onPress()
        } else if (targetScreen) {
            navigation.navigate(targetScreen)
        }
    }

    return (
        <View style={styles.footerContainer}>
            <Text style={styles.footerText}>{text}</Text>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.footerLink}>{linkText}</Text>
            </TouchableOpacity>
        </View>
    )
}
