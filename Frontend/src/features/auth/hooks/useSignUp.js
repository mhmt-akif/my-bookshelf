import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { showAlert } from "../../../app/store/alertSlice";
import { authService } from "../services/authService";

export const useSignUp = () => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSignUp = async (name, email, password) => {

        //boş alan kontrolü
        if (!name.trim() || !email.trim() || !password.trim()) {
            dispatch(showAlert({ title: "Uyarı", message: "Lütfen tüm alanları doldurunuz!" }))
            return;
        }
        //şifre uzunluğu kontrolü
        if (password.length < 6) {
            dispatch(showAlert({
                title: "Uyarı",
                message: "Şifre en az 6 karakter uzunluğunda olmalıdır"
            }))
            return;
        }

        setLoading(true);

        //backende istek atma
        try {
            //servisi çağır ve dönen veriyi al
            const data = await authService.signUp(name, email, password);
            
            // Eğer e-posta doğrulaması kapalıysa direkt giriş yapılır ve session döner
            if (data?.session) {
                dispatch(showAlert({
                    title: "Başarılı 🎉",
                    message: "Kayıt işlemi başarıyla tamamlandı!",
                    onConfirm: () => navigation.navigate("Books"),
                }));
            } else {
                // E-posta doğrulaması aktifse doğrulama ekranına yönlendir
                navigation.navigate("Verification", { email });
            }
        } catch (err) {
            console.log("SignUp hookta hata!", err);

            let errorMessage = err.message;
            if (err.message?.toLowerCase().includes("email not confirmed")) {
                errorMessage = "E-posta adresiniz henüz onaylanmamış. Lütfen gelen kutunuzu kontrol edin.";
            } else if (err.message?.toLowerCase().includes("user already registered")) {
                errorMessage = "Bu e-posta adresi zaten kayıtlı. Giriş yapmayı deneyin.";
            }

            dispatch(showAlert({ title: "Hata", message: errorMessage }));
        } finally {
            setLoading(false);
        }

    }

    return { handleSignUp, loading };
}