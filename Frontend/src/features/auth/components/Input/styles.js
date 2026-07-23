import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#2C2C2C',
        marginBottom: 8,
        marginLeft: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EBDDC5',
        height: 52,
        width: '100%',
        borderRadius: 26,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: '#CABEAA',
    },
    input: {
        fontSize: 15,
        color: '#2C2C2C',
        flex: 1,
        height: '100%',
    },
    iconContainer: {
        padding: 5,
        marginLeft: 10,
    }
})
export default styles