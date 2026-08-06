import { useDispatch } from "react-redux";
import { bookService } from "../services/bookService";
import { updateBookLocal } from "../../../app/store/bookSlice";
import { showAlert } from "../../../app/store/alertSlice";

export const useToggleReadStatus = () => {
    const dispatch = useDispatch();

    const handleToggleRead = async (id, currentIsRead) => {
        // Anında ekrana yansıt (optimistic update)
        dispatch(updateBookLocal({ id, isRead: !currentIsRead }));
        try {
            const updatedBook = await bookService.updateBook(id, { isRead: !currentIsRead });
            dispatch(updateBookLocal(updatedBook));
        } catch (err) {
            dispatch(updateBookLocal({ id, isRead: currentIsRead })); // geri al
            dispatch(showAlert({ title: "Hata", message: err.message }));
        }
    };

    return { handleToggleRead };
};
