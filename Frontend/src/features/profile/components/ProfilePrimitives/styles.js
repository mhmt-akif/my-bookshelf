import { StyleSheet } from "react-native"
import { ACCENT } from "./ProfilePrimitives"

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        paddingHorizontal: 24,
        marginTop: 20,
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: "700",
        letterSpacing: 1.2,
        textTransform: "uppercase",
        color: ACCENT,
    },
    divider: {
        height: 1,
        backgroundColor: "#F0EBE2",
        marginLeft: 66,
        marginRight: 16,
    },
    settingRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 14,
        gap: 14,
    },
    settingIcon: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: ACCENT + "18",
        justifyContent: "center",
        alignItems: "center",
    },
    settingLabel: {
        flex: 1,
        fontSize: 15,
        fontWeight: "500",
        color: "#2C2C2C",
    },
    settingRight: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    settingValue: {
        fontSize: 13,
        color: "#8C8881",
        fontWeight: "500",
    },
    pwdInputWrapper: {
        marginBottom: 12,
    },
    pwdLabel: {
        fontSize: 12,
        fontWeight: "600",
        color: "#6A6155",
        marginBottom: 6,
        letterSpacing: 0.5,
    },
    pwdRow: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: ACCENT + "40",
        borderRadius: 14,
        paddingHorizontal: 14,
        paddingVertical: 12,
        backgroundColor: "#FAF6F0",
    },
    pwdInput: {
        flex: 1,
        fontSize: 15,
        color: "#2C2C2C",
    },
})

export default styles;
