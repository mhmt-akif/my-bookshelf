import { View, Text, TouchableOpacity, Modal } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import styles from "./styles"

const ACCENT = "#C7753D"

export const CustomAlert = ({ visible, title, message, onClose }) => {
    const isSuccess = title === "Başarılı"

    return (
        <Modal visible={visible} transparent animationType="fade" statusBarTranslucent>
            <TouchableOpacity
                style={styles.alertOverlay}
                activeOpacity={1}
                onPress={onClose}
            >
                <View style={styles.alertContainer}>
                    <Ionicons
                        name={isSuccess ? "checkmark-circle" : "information-circle"}
                        size={40}
                        color={isSuccess ? "#4CAF50" : ACCENT}
                        style={styles.icon}
                    />
                    <Text style={styles.alertTitle}>{title}</Text>
                    <Text style={styles.alertMessage}>{message}</Text>
                    <TouchableOpacity style={styles.alertButton} onPress={onClose}>
                        <Text style={styles.alertButtonText}>Tamam</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}
