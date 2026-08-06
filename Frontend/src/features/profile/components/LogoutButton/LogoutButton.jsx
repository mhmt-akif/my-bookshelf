import { TouchableOpacity, Text, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import styles from "./styles"
import { useDispatch } from "react-redux"
import { showAlert } from "../../../../app/store/alertSlice"
import {authService} from "../../../auth/services/authService"
import {clearUser} from "../../../../app/store/authSlice"
export const LogoutButton = () => {
    const navigation = useNavigation()

    //redux işlemlerinde alert 
    const dispatch = useDispatch();

    const handleLogout = () => {

        dispatch(showAlert({
            title: "Çıkış Yap",
            message: "Hesabından çıkış yapmak istediğinden emin misin?",
            showCancel: true,
            cancelText: "İptal",
            confirmText: "Çıkış Yap",
            onConfirm: async () => {
                await authService.signOut();
                dispatch(clearUser());
                navigation.navigate("SignIn");
            },
        }))
    }

    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={handleLogout}
            activeOpacity={0.8}
        >
            <Ionicons name="log-out-outline" size={20} color="#E05252" />
            <Text style={styles.text}>Çıkış Yap</Text>
        </TouchableOpacity>
    )
}
