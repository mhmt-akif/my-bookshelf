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
        paddingHorizontal: 16,
        paddingTop: 15,
        paddingBottom: 40,
        alignItems: "center",
    },
    formContainer: {
        width: "90%",
        alignItems: "center",
    },
    rowContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    smallInputContainer: {
        width: "48%",
    },
    buttonContainer: {
        width: "100%",
        marginTop: 12,
    },
});

export default styles;