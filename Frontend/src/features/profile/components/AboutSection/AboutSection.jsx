import { View } from "react-native"
import { useDispatch } from "react-redux"
import { showAlert } from "../../../../app/store/alertSlice"
import { SectionHeader, SettingRow, Divider } from "../ProfilePrimitives/ProfilePrimitives"
import styles from "./styles"

export const AboutSection = () => {
    const dispatch = useDispatch()

    return (
        <>
            <SectionHeader title="Hakkında" icon="information-circle" />
            <View style={styles.card}>
                <SettingRow
                    icon="star"
                    label="Uygulamayı Değerlendir"
                    onPress={() =>
                        dispatch(showAlert({
                            title: "Teşekkürler!",
                            message: "Değerlendirmeniz için teşekkür ederiz 🌟"
                        }))
                    }
                />
                <Divider />
                <SettingRow icon="code-slash" label="Versiyon" value="1.0.0" />
            </View>
        </>
    )
}
