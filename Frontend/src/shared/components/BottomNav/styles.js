import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#F5EAD8",
        borderTopWidth: 1,
        borderTopColor: "#E3D6BE",
        paddingTop: 10,
        paddingBottom: 24,
    },
    tab: {
        flex: 1,
        alignItems: "center",
    },
    label: {
        fontSize: 12,
        color: "#8C8881",
        marginTop: 4,
    },
    labelActive: {
        color: "#C7753D",
        fontWeight: "700",
    },
})
export default styles
