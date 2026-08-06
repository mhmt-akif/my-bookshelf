import { useDispatch } from "react-redux";
import { setProfileImage } from "../../../app/store/userSlice";
import { setUser } from "../../../app/store/authSlice";
import { authService } from "../../auth/services/authService";
import { showAlert } from "../../../app/store/alertSlice";

export const useProfileImage = () => {
    const dispatch = useDispatch();

    const updateProfileImage = async (uri) => {
        dispatch(setProfileImage(uri)); // anında ekrana yansıt
        try {
            const updatedUser = await authService.updateUserMetadata({ profileImage: uri });
            dispatch(setUser(updatedUser));
        } catch (err) {
            dispatch(showAlert({ title: "Hata", message: "Profil fotoğrafı kaydedilemedi: " + err.message }));
        }
    };

    return { updateProfileImage };
};
