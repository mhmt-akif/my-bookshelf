import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F5EAD8",
    },
    container: {
        flex: 1,
        paddingTop: 50,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 20,
        alignItems: "center",
        paddingBottom: 40,
    },
    coverContainer: {
        width: 160,
        height: 240,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        overflow: 'hidden',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    coverImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    coverPlaceholder: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2C2C2C',
        textAlign: 'center',
        marginBottom: 8,
    },
    author: {
        fontSize: 18,
        color: '#5A554C',
        marginBottom: 24,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    infoBox: {
        flex: 1,
        backgroundColor: '#EBDDC5',
        padding: 16,
        borderRadius: 12,
        marginHorizontal: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CABEAA',
    },
    infoLabel: {
        fontSize: 12,
        color: '#8C8881',
        marginBottom: 4,
        textTransform: 'uppercase',
    },
    infoValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2C2C2C',
    },
    editForm: {
        width: '100%',
    },
    deleteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 28,
        paddingVertical: 14,
        alignSelf: 'stretch',
        marginHorizontal: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F0B8AE',
        backgroundColor: '#FBEAE7',
    },
    deleteButtonText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#C0392B',
        marginLeft: 8,
    },
});

export default styles;
