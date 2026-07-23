import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 12,
        marginBottom: 14,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    cover: {
        width: 48,
        height: 64,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 14,
    },
    info: {
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: "700",
        color: "#2C2C2C",
        marginBottom: 4,
    },
    author: {
        fontSize: 13,
        color: "#8C8881",
    },
    radio: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: "#CABEAA",
    },
    radioSelected: {
        backgroundColor: "#4F5D3A",
        borderColor: "#4F5D3A",
    },
})
export default styles
