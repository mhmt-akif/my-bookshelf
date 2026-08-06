import { StyleSheet } from "react-native"

const ACCENT = "#C7753D"

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FDF6EC",
        width: '100%',
        alignSelf: 'center',
        borderRadius: 24,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#EAE0CC",
        shadowColor: ACCENT,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 2,
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    textColumn: {
        flex: 1,
        marginRight: 12,
    },
    streakCountRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 4,
        flexWrap: 'wrap',
    },
    streakNumber: {
        fontSize: 32,
        fontWeight: '900',
        color: ACCENT,
        marginRight: 6,
    },
    streakLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: '#5A554C',
    },
    streakSubtitle: {
        fontSize: 13,
        color: '#8C8881',
        lineHeight: 18,
        minHeight: 36,
    },
    daysRow: {
        flexDirection: 'row',
        gap: 4,
    },
    dayContainer: {
        alignItems: 'center',
        gap: 6,
    },
    dayText: {
        fontSize: 10,
        fontWeight: '600',
        color: '#8C8881',
    },
    dayCircle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 1.5,
        borderColor: '#E3D6BE',
        backgroundColor: 'transparent',
    },
    dayCircleCompleted: {
        backgroundColor: ACCENT,
        borderColor: ACCENT,
    },
    divider: {
        height: 1,
        backgroundColor: '#EAE0CC',
        width: '100%',
        marginBottom: 16,
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    questionText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#2C2C2C',
        flex: 1,
        marginRight: 10,
    },
    actionButton: {
        backgroundColor: ACCENT,
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
    },
    actionButtonText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
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
    modalField: {
        marginBottom: 4,
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
    cancelBtn: {
        paddingVertical: 12,
        alignItems: "center",
        marginTop: 8,
    },
    cancelBtnText: {
        fontSize: 15,
        color: "#8C8881",
        fontWeight: "600",
    },
})

export default styles