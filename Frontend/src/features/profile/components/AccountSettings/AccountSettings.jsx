import {
    View,
    Text,
    TouchableOpacity,
    Switch,
    Modal,
} from "react-native"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { showAlert } from "../../../../app/store/alertSlice"
import {
    SectionHeader,
    SettingRow,
    Divider,
    ACCENT,
} from "../ProfilePrimitives/ProfilePrimitives"
import { Input } from "../../../auth/components/Input/Input"
import styles from "./styles"

export const AccountSettings = () => {
    const dispatch = useDispatch()
    const [notificationsEnabled, setNotificationsEnabled] = useState(true)
    const [showPasswordModal, setShowPasswordModal] = useState(false)
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleChangePassword = () => {
        if (!oldPassword || !newPassword || !confirmPassword) {
            dispatch(showAlert({ title: "Hata", message: "Lütfen tüm alanları doldurun." }))
            return
        }
        if (newPassword.length < 6) {
            dispatch(showAlert({ title: "Hata", message: "Yeni şifre en az 6 karakter olmalıdır." }))
            return
        }
        if (newPassword !== confirmPassword) {
            dispatch(showAlert({ title: "Hata", message: "Yeni şifreler eşleşmiyor." }))
            return
        }
        if (oldPassword === newPassword) {
            dispatch(showAlert({ title: "Hata", message: "Yeni şifre mevcut şifre ile aynı olamaz!" }))
            return
        }

        setShowPasswordModal(false)
        setOldPassword("")
        setNewPassword("")
        setConfirmPassword("")

        setTimeout(() => {
            dispatch(showAlert({ title: "Başarılı", message: "Şifreniz başarıyla değiştirildi!" }))
        }, 300)
    }

    return (
        <>
            <SectionHeader title="Hesap" icon="person-circle" />

            <View style={styles.card}>
                <SettingRow
                    icon="notifications"
                    label="Bildirimler"
                    rightElement={
                        <Switch
                            value={notificationsEnabled}
                            onValueChange={setNotificationsEnabled}
                            trackColor={{ false: "#D0C8BA", true: ACCENT + "80" }}
                            thumbColor={notificationsEnabled ? ACCENT : "#9E9790"}
                        />
                    }
                />
                <Divider />
                <SettingRow
                    icon="lock-closed"
                    label="Şifre Değiştir"
                    onPress={() => setShowPasswordModal(true)}
                />
                <Divider />
                <SettingRow
                    icon="help-circle"
                    label="Yardım & Destek"
                    onPress={() =>
                        dispatch(showAlert({ title: "Yardım", message: "Destek için: destek@bookshelf.app adresine e-posta gönderin." }))
                    }
                />
                <Divider />
                <SettingRow
                    icon="shield-checkmark"
                    label="Gizlilik Politikası"
                    onPress={() =>
                        dispatch(showAlert({ title: "Gizlilik", message: "Gizlilik politikamız yakında burada olacak." }))
                    }
                />
            </View>

            {/* Password Modal */}
            <Modal visible={showPasswordModal} transparent animationType="slide" statusBarTranslucent>
                <View style={styles.overlay}>
                    <View style={styles.sheet}>
                        <View style={styles.handle} />
                        <Text style={styles.sheetTitle}>Şifre Değiştir</Text>
                        <Input
                            label="Mevcut Şifre"
                            placeholder="Mevcut şifreniz"
                            value={oldPassword}
                            onChangeText={setOldPassword}
                            secureTextEntry
                            inputContainerStyle={styles.modalInputContainer}
                        />
                        <Input
                            label="Yeni Şifre"
                            placeholder="Yeni şifreniz"
                            value={newPassword}
                            onChangeText={setNewPassword}
                            secureTextEntry
                            inputContainerStyle={styles.modalInputContainer}
                        />
                        <Input
                            label="Yeni Şifre (Tekrar)"
                            placeholder="Yeni şifrenizi doğrulayın"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                            inputContainerStyle={styles.modalInputContainer}
                        />
                        <TouchableOpacity style={styles.saveBtn} onPress={handleChangePassword}>
                            <Text style={styles.saveBtnText}>Kaydet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.cancelBtn}
                            onPress={() => setShowPasswordModal(false)}
                        >
                            <Text style={styles.cancelBtnText}>İptal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}