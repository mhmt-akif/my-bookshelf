import { StyleSheet } from "react-native"
import { ACCENT } from "../ProfilePrimitives/ProfilePrimitives"

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 16,
        backgroundColor: "#FDF6EC",
        borderRadius: 20,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: "#EAE0CC",
        shadowColor: "#C7753D",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
        justifyContent: "flex-end",
    },
    modalInputContainer: {
        backgroundColor: "#F0EBE2",
        borderColor: "#E3D6BE",
    },
    sheet: {
        backgroundColor: "#FDFAF5",
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        paddingHorizontal: 20,
        paddingBottom: 36,
        paddingTop: 12,
    },
    handle: {
        width: 40,
        height: 4,
        backgroundColor: "#D0C8BA",
        borderRadius: 2,
        alignSelf: "center",
        marginBottom: 20,
    },
    sheetTitle: {
        fontSize: 18,
        fontWeight: "800",
        color: "#1C1B1F",
        marginBottom: 16,
        textAlign: "center",
    },
    saveBtn: {
        backgroundColor: ACCENT,
        borderRadius: 16,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 16,
    },
    saveBtnText: {
        fontSize: 15,
        fontWeight: "700",
        color: "#fff",
    },
    cancelBtn: {
        paddingVertical: 12,
        alignItems: "center",
        marginTop: 8,
    },
    cancelBtnText: {
        fontSize: 15,
        color: "#8C8881",
        fontWeight: "600",
    },
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
