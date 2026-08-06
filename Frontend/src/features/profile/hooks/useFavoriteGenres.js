import { useDispatch } from "react-redux";
import { setFavoriteGenres } from "../../../app/store/userSlice";
import { setUser } from "../../../app/store/authSlice";
import { authService } from "../../auth/services/authService";
import { showAlert } from "../../../app/store/alertSlice";

export const useFavoriteGenres = () => {
    const dispatch = useDispatch();

    const updateFavoriteGenres = async (genres) => {
        dispatch(setFavoriteGenres(genres)); // anında ekrana yansıt
        try {
            const updatedUser = await authService.updateUserMetadata({ favoriteGenres: genres });
            dispatch(setUser(updatedUser));
        } catch (err) {
            dispatch(showAlert({ title: "Hata", message: "Favori türler kaydedilemedi: " + err.message }));
        }
    };

    return { updateFavoriteGenres };
};
