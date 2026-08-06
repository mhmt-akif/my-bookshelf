import { useState } from "react";
import { useDispatch } from "react-redux";
import { bookService } from "../services/bookService";
import { deleteBook } from "../../../app/store/bookSlice";
import { showAlert } from "../../../app/store/alertSlice";

export const useDeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleDeleteBook = async (id) => {
        setLoading(true);
        try {
            await bookService.deleteBooks(id);
            dispatch(deleteBook(id));
            return true;
        } catch (err) {
            dispatch(showAlert({ title: "Hata", message: err.message }));
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { handleDeleteBook, loading };
};
