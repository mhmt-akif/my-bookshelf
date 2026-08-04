import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { showAlert } from "../../../app/store/alertSlice";
import { authService } from "../services/authService";
export const useNewPassword = () => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleUpdatePassword = async (password, passwordRepeat) => {
        if (!password.trim() || !passwordRepeat.trim()) {
            dispatch(showAlert({
                message: "Lütfen tüm alanları doldurun.",
                type: "error",
                duration: 1000,
                isVisible: true
            }))
            return;
        }
        if (password !== passwordRepeat) {
            dispatch(showAlert({
                message: "Şifreler eşleşmiyor.",
                type: "error",
                duration: 1000,
                isVisible: true
            }))
            return;
        }

        if (password.length < 6 || passwordRepeat.length < 6) {
            dispatch(showAlert({
                title: "Hata",
                message: "Şifre en az 6 karakter olmalıdır.",
                type: "error",
                duration: 1000,
                isVisible: true
            }))
            return;
        }

        setLoading(true);

        try {
            await authService.updatePassword(password);
            dispatch(showAlert({
                message: "Şifreniz başarıyla güncellendi.",
                type: "success",
                duration: 1000,
                isVisible: true
            }))
            navigation.navigate("SignIn");
        } catch (err) {
            console.log(err);
            dispatch(showAlert({
                message: err.message,
                type: "error",
                duration: 1000,
                isVisible: true
            }))
        } finally {
            setLoading(false);
        }
    }


    return {
        handleUpdatePassword,
        loading
    }

}