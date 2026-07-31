import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    animation: {
        width: 160,
        height: 160,
    },
    text: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: "600",
        color: "#FFFFFF",
        textAlign: "center",
        letterSpacing: 0.5,
    },
});

export default styles;
