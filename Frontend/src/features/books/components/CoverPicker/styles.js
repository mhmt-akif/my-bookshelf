import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        marginBottom: 20,
        marginTop: 5,
    },
    pickerBox: {
        width: 140,
        height: 175,
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: "#B8AB98",
        borderStyle: "dashed",
        backgroundColor: "#ECE0CD",
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        overflow: "hidden",
    },
    iconContainer: {
        marginBottom: 8,
    },
    titleText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#5C554B",
        textAlign: "center",
        lineHeight: 18,
    },
    subText: {
        fontSize: 11,
        color: "#7C756B",
        textAlign: "center",
        textDecorationLine: "underline",
        marginTop: 4,
    },
    coverImage: {
        width: "100%",
        height: "100%",
        borderRadius: 14,
        resizeMode: "cover",
    },
    removeBadge: {
        position: "absolute",
        top: 6,
        right: 6,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;
