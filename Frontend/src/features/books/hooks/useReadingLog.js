import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readingLogService } from "../services/readingLogService";
import { bookService } from "../services/bookService";
import { addReadingLogLocal, deleteReadingLogLocal } from "../../../app/store/readingLogSlice";
import { updateBookLocal } from "../../../app/store/bookSlice";
import { showAlert } from "../../../app/store/alertSlice";

export const useReadingLog = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.user?.id);
    const booksList = useSelector((state) => state.books.booksList);
    const logs = useSelector((state) => state.readingLogs.logs);

    const handleAddLog = async (bookId, pagesRead) => {
        if (!bookId) {
            dispatch(showAlert({ title: "Uyarı", message: "Lütfen bir kitap seçin." }));
            return false;
        }
        if (!pagesRead || Number(pagesRead) <= 0) {
            dispatch(showAlert({ title: "Uyarı", message: "Lütfen geçerli bir sayfa sayısı girin." }));
            return false;
        }

        const book = booksList.find((b) => b.id === bookId);
        if (book?.pageCount && Number(pagesRead) > book.pageCount) {
            dispatch(showAlert({
                title: "Uyarı",
                message: `Okuduğun sayfa sayısı, kitabın toplam sayfa sayısını (${book.pageCount}) geçemez.`,
            }));
            return false;
        }

        setLoading(true);
        try {
            const log = await readingLogService.addLog({
                userId,
                bookId,
                pagesRead: Number(pagesRead),
            });
            dispatch(addReadingLogLocal(log));

            // Bu kitap için toplam okunan sayfa, kitabın toplam sayfa sayısına ulaştıysa otomatik okundu işaretle
            if (book && !book.isRead && book.pageCount) {
                const totalReadPages = logs
                    .filter((l) => l.bookId === bookId)
                    .reduce((sum, l) => sum + l.pagesRead, 0) + Number(pagesRead);

                if (totalReadPages >= book.pageCount) {
                    const updatedBook = await bookService.updateBook(bookId, { isRead: true });
                    dispatch(updateBookLocal(updatedBook));
                }
            }

            return true;
        } catch (err) {
            dispatch(showAlert({ title: "Hata", message: err.message }));
            return false;
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteLog = async (id) => {
        try {
            await readingLogService.deleteLog(id);
            dispatch(deleteReadingLogLocal(id));
            return true;
        } catch (err) {
            dispatch(showAlert({ title: "Hata", message: err.message }));
            return false;
        }
    };

    return { handleAddLog, handleDeleteLog, loading };
};
