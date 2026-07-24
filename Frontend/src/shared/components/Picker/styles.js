import { StyleSheet, Dimensions } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 20,
    },
    label: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#2C2C2C",
        marginBottom: 8,
        marginLeft: 4,
    },
    pickerTrigger: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#EBDDC5",
        height: 52,
        width: "100%",
        borderRadius: 26,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: "#CABEAA",
    },
    valueText: {
        fontSize: 15,
        color: "#2C2C2C",
        flex: 1,
    },
    placeholderText: {
        fontSize: 15,
        color: "#8C8881",
        flex: 1,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        justifyContent: "flex-end",
    },
    modalContainer: {
        backgroundColor: "#F5EAD8",
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        maxHeight: SCREEN_HEIGHT * 0.65,
        paddingTop: 16,
        paddingBottom: 34,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 10,
    },
    dragHandle: {
        width: 40,
        height: 5,
        backgroundColor: "#CABEAA",
        borderRadius: 3,
        alignSelf: "center",
        marginBottom: 14,
    },
    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#E2D3BE",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#2C2C2C",
    },
    closeButton: {
        padding: 4,
    },
    listContent: {
        paddingBottom: 10,
    },
    optionItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 18,
        marginBottom: 8,
        backgroundColor: "#EBDDC5",
        borderWidth: 1,
        borderColor: "#CABEAA",
    },
    selectedOptionItem: {
        backgroundColor: "#4F5D3A",
        borderColor: "#4F5D3A",
    },
    optionText: {
        fontSize: 15,
        fontWeight: "500",
        color: "#2C2C2C",
    },
    selectedOptionText: {
        color: "#FFFFFF",
        fontWeight: "700",
    },
});

export default styles;
