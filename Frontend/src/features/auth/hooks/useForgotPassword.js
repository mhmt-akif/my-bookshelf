import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { showAlert } from "../../../app/store/alertSlice"
import { authService } from "../services/authService"

export const useForgotPassword = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleForgotPassword = async (email) => {

        //boşluk kontrolü
        if (!email.trim()) {
            dispatch(showAlert({
                title: "Uyarı",
                message: "Lütfen bir e-posta adresi giriniz"
            }))
            return;
        }
        setLoading(true);

        try {
            await authService.resetPassword(email);
            dispatch(showAlert({
                title: "Kod Gönderildi",
                message: "E-posta adresinize 6 haneli şifre sıfırlama kodu gönderildi.",
                confirmText: "Kodu Gir",
                onConfirm: () => navigation.navigate("Verification", { email: email, isPasswordReset: true })
            }))
        } catch (err) {
            dispatch(showAlert({
                title: "Hata",
                message: err.message
            }))
        } finally {
            setLoading(false)
        }
    }
    return { handleForgotPassword, loading }

}