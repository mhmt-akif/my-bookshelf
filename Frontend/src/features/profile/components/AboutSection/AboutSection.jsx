import { View } from "react-native"
import { useState } from "react"
import { SectionHeader, SettingRow, Divider } from "../ProfilePrimitives/ProfilePrimitives"
import { CustomAlert } from "../../../../shared/components/CustomAlert/CustomAlert"
import styles from "./styles"

export const AboutSection = () => {
    const [alertConfig, setAlertConfig] = useState({
        show: false,
        title: "",
        message: "",
    })

    const showAlert = (title, message) => {
        setAlertConfig({ show: true, title, message })
    }

    const hideAlert = () => {
        setAlertConfig({ show: false, title: "", message: "" })
    }

    return (
        <>
            <SectionHeader title="Hakkında" icon="information-circle" />
            <View style={styles.card}>
                <SettingRow
                    icon="star"
                    label="Uygulamayı Değerlendir"
                    onPress={() =>
                        showAlert("Teşekkürler!", "Değerlendirmeniz için teşekkür ederiz 🌟")
                    }
                />
                <Divider />
                <SettingRow icon="code-slash" label="Versiyon" value="1.0.0" />
            </View>

            <CustomAlert
                visible={alertConfig.show}
                title={alertConfig.title}
                message={alertConfig.message}
                onClose={hideAlert}
            />
        </>
    )
}
