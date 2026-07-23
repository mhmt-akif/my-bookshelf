import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F5EAD8",
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 60,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: "900",
        color: "#2C2C2C",
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#D3E8C9",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarText: {
        fontSize: 13,
        fontWeight: "700",
        color: "#33502E",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#EBDDC5",
        height: 48,
        borderRadius: 24,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: "#CABEAA",
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        color: "#2C2C2C",
    },
    filterRow: {
        flexDirection: "row",
        marginBottom: 12,
    },
    filterChip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#CABEAA",
        marginRight: 8,
    },
    filterChipActive: {
        backgroundColor: "#4F5D3A",
        borderColor: "#4F5D3A",
    },
    filterText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#5A554C",
    },
    filterTextActive: {
        color: "#FFFFFF",
    },
    countText: {
        fontSize: 13,
        color: "#8C8881",
        marginBottom: 12,
    },
    listContent: {
        paddingBottom: 100,
    },
    fab: {
        position: "absolute",
        right: 4,
        bottom: 20,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#C7753D",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
})
export default styles
