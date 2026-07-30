import { StyleSheet } from "react-native"
import { FONTS } from "../../../../shared/theme/typography"

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F5EAD8",
    },
    container: {
        flex: 1,
        paddingTop: 50,
    },
    title: {
        fontFamily: FONTS.abrilFatface,
        fontSize: 30,
        color: "#1C1B1F",
        paddingHorizontal: 20,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 15,
        color: "#6A6155",
        paddingHorizontal: 20,
    },
    formContainer: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    btnContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: "center"
    }

})
export default styles;