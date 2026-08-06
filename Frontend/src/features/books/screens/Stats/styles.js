import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F5EAD8",
    },
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    statsRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 16,
        marginBottom: 8,
    },
    statCard: {
        width: "48%",
        backgroundColor: "#FDF6EC",
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#EAE0CC",
    },
    statValue: {
        fontSize: 22,
        fontWeight: "800",
        color: "#2C2C2C",
        marginTop: 6,
    },
    statLabel: {
        fontSize: 12,
        color: "#8C8881",
        marginTop: 2,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2C2C2C",
        marginTop: 12,
        marginBottom: 8,
    },
    listContent: {
        paddingBottom: 40,
    },
    logRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FDF6EC",
        borderRadius: 14,
        padding: 14,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#EAE0CC",
    },
    logBookTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: "#2C2C2C",
        marginBottom: 2,
    },
    logMeta: {
        fontSize: 12,
        color: "#8C8881",
    },
    deleteIconBtn: {
        padding: 6,
        marginLeft: 8,
    },
    emptyText: {
        textAlign: "center",
        color: "#8C8881",
        marginTop: 24,
    },
});

export default styles;
