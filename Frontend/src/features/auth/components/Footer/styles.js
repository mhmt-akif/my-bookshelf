import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    footerContainer: {
        position: "absolute",
        bottom: 40,
        left: 20,
        right: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    footerText: {
        fontSize: 15,
        color: "#645C50",
        marginRight: 5,
    },
    footerLink: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#985B31",
    }

})

export default styles