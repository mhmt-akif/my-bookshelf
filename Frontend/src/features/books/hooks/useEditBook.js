import { useState } from "react";
import { useDispatch } from "react-redux";
import { bookService } from "../services/bookService";
import { showAlert } from "../../../app/store/alertSlice";
import { updateBookLocal } from "../../../app/store/bookSlice";

export const useEditBook = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleEditBook = async (id, bookData) => {
        if (!bookData.title.trim() || !bookData.author.trim() || !bookData.category.trim() || !String(bookData.pageCount).trim()) {
            dispatch(showAlert({ title: "Uyarı", message: "Lütfen tüm alanları doldurun" }));
            return false;
        }
        if (bookData.pageCount < 0) {
            dispatch(showAlert({ title: "Hata", message: "Sayfa sayısı negatif olamaz!" }));
            return false;
        }

        setLoading(true);
        try {
            const updatedBook = await bookService.updateBook(id, bookData);
            dispatch(updateBookLocal(updatedBook));
            return true;
        } catch (err) {
            console.log(err);
            dispatch(showAlert({ title: "Hata", message: err.message }));
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { handleEditBook, loading };
};
