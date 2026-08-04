import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { showAlert } from "../../../app/store/alertSlice";
import { authService } from "../services/authService";

export const useVerification = (email, isPasswordReset) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleVerify = async (code) => {
        if (!code || code.length < 6) {
            dispatch(showAlert({ title: "Uyarı", message: "Lütfen 6 haneli kodu eksiksiz girin." }));
            return;
        }

        setLoading(true);
        try {
            if (isPasswordReset) {
                // Şifre sıfırlama OTP kodunu doğrula
                await authService.verifyRecoveryOtp(email, code);
                dispatch(showAlert({
                    title: "Doğrulama Başarılı! 🔑",
                    message: "Kod başarıyla doğrulandı. Şimdi yeni şifrenizi belirleyebilirsiniz.",
                    onConfirm: () => navigation.navigate("NewPassword"),
                }));
            } else {
                // Normal kayıt OTP kodunu doğrula
                await authService.verifyEmailOtp(email, code);
                dispatch(showAlert({
                    title: "Hesabınız Onaylandı! 🎉",
                    message: "E-posta adresiniz başarıyla doğrulandı. Artık giriş yapabilirsiniz.",
                    onConfirm: () => navigation.navigate("SignIn"),
                }));
            }
        } catch (err) {
            console.log("OTP doğrulama hatası:", err);
            let errorMessage = "Doğrulama başarısız oldu. Lütfen tekrar deneyin.";
            const msg = err.message?.toLowerCase() || "";

            if (msg.includes("expired") && msg.includes("invalid")) {
                errorMessage = "Girdiğiniz kod hatalı veya süresi dolmuş. Lütfen tekrar kontrol edin.";
            } else if (msg.includes("expired")) {
                errorMessage = "Kodun süresi dolmuş. Lütfen yeni kod isteyin.";
            } else if (msg.includes("invalid") || msg.includes("token")) {
                errorMessage = "Girdiğiniz kod hatalı. Lütfen tekrar kontrol edin.";
            } else if (err.message) {
                errorMessage = err.message;
            }
            dispatch(showAlert({ title: "Hata", message: errorMessage }));
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        if (!email) return;
        setLoading(true);
        try {
            if (isPasswordReset) {
                // Şifre sıfırlama için yeni kod iste (Supabase'de yine resetPassword çağrılır)
                await authService.resetPassword(email);
            } else {
                // Normal kayıt için yeni kod iste
                await authService.resendOtp(email);
            }
            dispatch(showAlert({
                title: "Kod Gönderildi",
                message: `${email} adresinize yeni bir kod gönderdik.`,
            }));
        } catch (err) {
            let errorMessage = err.message;
            if (err.message?.toLowerCase().includes("rate limit") ||
                err.message?.toLowerCase().includes("seconds")) {
                errorMessage = "Çok sık deneme yaptınız. Lütfen biraz bekleyin.";
            }
            dispatch(showAlert({ title: "Hata", message: errorMessage }));
        } finally {
            setLoading(false);
        }
    };

    return { handleVerify, handleResend, loading };
};
