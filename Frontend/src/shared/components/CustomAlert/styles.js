import { StyleSheet } from "react-native"

const ACCENT = "#C7753D"

const styles = StyleSheet.create({
    alertOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
    },
    alertContainer: {
        backgroundColor: "#FAF6EF",
        borderRadius: 24,
        padding: 28,
        width: "80%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
    },
    icon: {
        marginBottom: 8,
    },
    alertTitle: {
        fontSize: 18,
        fontWeight: "800",
        color: "#4A3E3D",
        textAlign: "center",
        marginBottom: 8,
    },
    alertMessage: {
        fontSize: 14,
        color: "#6A6155",
        textAlign: "center",
        lineHeight: 20,
        marginBottom: 20,
    },
    alertButton: {
        backgroundColor: ACCENT,
        borderRadius: 14,
        paddingHorizontal: 36,
        paddingVertical: 12,
    },
    alertButtonText: {
        fontSize: 15,
        fontWeight: "700",
        color: "#FFFFFF",
    },
})

export default styles
