import { View, Text, TouchableOpacity, Modal } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import styles from "./styles"

const ACCENT = "#C7753D"

export const CustomAlert = ({
    visible,
    title,
    message,
    onClose,
    showCancel = false,
    cancelText = "Vazgeç",
    confirmText = "Evet",
    onConfirm
}) => {
    const isSuccess = title === "Başarılı"
    const isWarning = title === "Uyarı" || showCancel

    return (
        <Modal visible={visible} transparent animationType="fade" statusBarTranslucent>
            <View style={styles.alertOverlay}>
                <View style={styles.alertContainer}>
                    <Ionicons
                        name={isSuccess ? "checkmark-circle" : (isWarning ? "warning" : "information-circle")}
                        size={40}
                        color={isSuccess ? "#4CAF50" : (isWarning ? "#E53935" : ACCENT)}
                        style={styles.icon}
                    />
                    <Text style={styles.alertTitle}>{title}</Text>
                    <Text style={styles.alertMessage}>{message}</Text>

                    {showCancel ? (
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.cancelButton} onPress={onClose} activeOpacity={0.8}>
                                <Text style={styles.cancelButtonText}>{cancelText}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.confirmButton}
                                onPress={() => {
                                    if (onConfirm) onConfirm();
                                }}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.confirmButtonText}>{confirmText}</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity
                            style={styles.alertButton}
                            onPress={() => {
                                onClose();
                                if (onConfirm) onConfirm();
                            }}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.alertButtonText}>Tamam</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </Modal>
    )
}
