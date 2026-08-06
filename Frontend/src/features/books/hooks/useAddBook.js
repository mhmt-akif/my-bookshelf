import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { bookService } from "../services/bookService";
import { showAlert } from "../../../app/store/alertSlice";
import { addBookLocal } from "../../../app/store/bookSlice";

export const useAddBook = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userId = useSelector((state) => state.auth.user?.id);

    const handleSaveBook = async (bookData) => {
        if (!bookData.title.trim() || !bookData.author.trim() || !bookData.category.trim() || !bookData.totalPages.trim()) {
            dispatch(showAlert({ title: "Uyarı", message: "Lütfen tüm alanları doldurun" }));
            return;
        }
        if (bookData.pageCount < 0) {
            dispatch(showAlert({ title: "Hata", message: "Sayfa sayısı negatif olamaz!" }));
            return;
        }

        setLoading(true);
        try {
            const savedBook = await bookService.addBooks({ ...bookData, userId });
            dispatch(addBookLocal(savedBook)); // Supabase'ten dönen gerçek satırı Redux'a yaz
            dispatch(showAlert({
                title: "Başarılı",
                message: "Kitap başarıyla eklendi!",
                onConfirm: () => navigation.goBack(),
            }));
        } catch (err) {
            console.log(err);
            dispatch(showAlert({ title: "Hata", message: err.message }));
        } finally {
            setLoading(false);
        }
    };

    return { handleSaveBook, loading };
};