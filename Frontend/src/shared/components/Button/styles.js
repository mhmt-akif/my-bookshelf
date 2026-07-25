import { StyleSheet } from "react-native";
import { FONTS } from "../../theme/typography";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C7753D', // Turuncu/kahve tonu
        height: 52,
        width: '100%',
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    title: {
        fontFamily: FONTS.abrilFatface,
        color: '#FFFFFF',
        fontSize: 18,
    }
})
export default styles
