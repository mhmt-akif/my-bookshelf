import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { authService } from "../services/authService"
import { showAlert } from "../../../app/store/alertSlice"
export const useSignIn = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const handleSignIn = async (email, password) => {
        if (!email.trim() || !password.trim()) {
            dispatch(showAlert({ title: "Uyarı", message: "Lütfen e-posta ve şifrenizi giriniz!" }))
            return
        }
        setLoading(true)
        try {
            await authService.signInWithPassword(email, password)
            dispatch(showAlert({
                title: "Tebrikler",
                message: "Giriş Başarılı!",
                onConfirm: () => navigation.navigate("Books")
            }))
        } catch (error) {
            let errorMessage = error.message;
            if (error.message?.toLowerCase().includes("email not confirmed")) {
                errorMessage = "E-posta adresiniz henüz onaylanmamış. Lütfen gelen kutunuzu kontrol edip onay bağlantısına tıklayın.";
            } else if (error.message?.toLowerCase().includes("invalid login credentials")) {
                errorMessage = "E-posta veya şifre hatalı. Lütfen tekrar deneyin.";
            }
            dispatch(showAlert({ title: "Hata", message: errorMessage }))
        } finally {
            setLoading(false)
        }
    }
    return { handleSignIn, loading }
}