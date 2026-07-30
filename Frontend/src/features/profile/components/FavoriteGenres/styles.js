import { StyleSheet, Dimensions } from "react-native"
import { ACCENT } from "../ProfilePrimitives/ProfilePrimitives"

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
    previewCard: {
        marginHorizontal: 16,
        borderRadius: 20,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
        backgroundColor: ACCENT + "12",
    },
    scrollWrapper: {
        flex: 1,
        marginRight: 8,
    },
    scrollContent: {
        alignItems: "center",
    },
    chips: {
        flexDirection: "row",
        gap: 6,
    },
    chip: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: ACCENT,
        gap: 4,
    },
    chipText: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "600",
    },
    chipMore: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: ACCENT,
    },
    chipMoreText: {
        fontSize: 12,
        fontWeight: "700",
        color: ACCENT,
    },
    emptyText: {
        fontSize: 13,
        color: "#8C8881",
        fontStyle: "italic",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "flex-end",
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
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingVertical: 8,
    },
    gridItem: {
        width: "30%",
        margin: "1.5%",
        aspectRatio: 1,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0EBE2",
        borderWidth: 1.5,
        borderColor: "#E3D6BE",
        gap: 6,
    },
    gridItemActive: {
        backgroundColor: ACCENT,
        borderColor: ACCENT,
    },
    gridLabel: {
        fontSize: 11,
        fontWeight: "600",
        color: "#6A6155",
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
})

export default styles
