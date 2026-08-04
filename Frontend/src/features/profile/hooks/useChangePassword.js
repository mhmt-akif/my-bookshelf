import { useState } from "react";
import { useDispatch } from "react-redux";
import { showAlert } from "../../../app/store/alertSlice";
import { authService } from "../../auth/services/authService";

export const useChangePassword = (onSuccess) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleChangePassword = async (oldPassword, newPassword, confirmPassword) => {
        // Boşluk kontrolü
        if (!oldPassword.trim() || !newPassword.trim() || !confirmPassword.trim()) {
            dispatch(showAlert({ title: "Hata", message: "Lütfen tüm alanları doldurun." }));
            return;
        }

        // Uzunluk kontrolü
        if (newPassword.length < 6) {
            dispatch(showAlert({ title: "Hata", message: "Yeni şifre en az 6 karakter olmalıdır." }));
            return;
        }

        // Şifreler eşleşiyor mu kontrolü
        if (newPassword !== confirmPassword) {
            dispatch(showAlert({ title: "Hata", message: "Yeni şifreler eşleşmiyor." }));
            return;
        }

        // Yeni şifre eskisinin aynısı mı kontrolü
        if (oldPassword === newPassword) {
            dispatch(showAlert({ title: "Hata", message: "Yeni şifre mevcut şifre ile aynı olamaz!" }));
            return;
        }

        setLoading(true);
        try {
            // 1. Mevcut aktif kullanıcının e-postasını al
            const currentUser = await authService.getCurrentUser();

            // 2. Eski şifrenin doğruluğunu kontrol etmek için arka planda giriş denemesi yap
            try {
                await authService.signInWithPassword(currentUser.email, oldPassword);
            } catch (authError) {
                dispatch(showAlert({ title: "Hata", message: "Mevcut şifrenizi yanlış girdiniz." }));
                setLoading(false);
                return;
            }

            // 3. Giriş başarılıysa yeni şifreyi güncelle
            await authService.updatePassword(newPassword);

            // Başarılı olduğunda modalı kapatmak ve inputları temizlemek için callback tetikle
            if (onSuccess) onSuccess();

            dispatch(showAlert({ title: "Başarılı", message: "Şifreniz başarıyla değiştirildi!" }));
        } catch (error) {
            dispatch(showAlert({ title: "Hata", message: error.message || "Şifre değiştirilirken bir hata oluştu." }));
        } finally {
            setLoading(false);
        }
    };

    return { handleChangePassword, loading };
};
