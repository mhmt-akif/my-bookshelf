import { StyleSheet } from "react-native"
import { ACCENT } from "../ProfilePrimitives/ProfilePrimitives"

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 60,
        paddingBottom: 28,
        paddingHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#EAE0CC",
    },
    avatarWrapper: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 3,
        borderColor: ACCENT + "55",
        marginBottom: 14,
        position: "relative",
    },
    avatarBg: {
        width: "100%",
        height: "100%",
        borderRadius: 45,
        backgroundColor: ACCENT + "25",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarText: {
        fontSize: 28,
        fontWeight: "800",
        letterSpacing: 1,
        color: ACCENT,
    },
    avatarImage: {
        width: "100%",
        height: "100%",
        borderRadius: 45,
    },
    editBadge: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: ACCENT,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#F5EAD8",
    },
    userName: {
        fontSize: 22,
        fontWeight: "800",
        color: "#1C1B1F",
        letterSpacing: 0.3,
        marginBottom: 4,
    },
    userEmail: {
        fontSize: 13,
        color: "#8C8881",
        marginBottom: 22,
    },
    statsRow: {
        flexDirection: "row",
        width: "100%",
    },
    statCard: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 14,
        borderRadius: 16,
        backgroundColor: ACCENT + "12",
        marginHorizontal: 4,
    },
    statNum: {
        fontSize: 22,
        fontWeight: "900",
        color: ACCENT,
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 11,
        color: "#8C8881",
        textAlign: "center",
        fontWeight: "500",
    },
    statDivider: {
        width: 1,
        backgroundColor: ACCENT + "20",
        marginVertical: 10,
    },
})

export default styles
