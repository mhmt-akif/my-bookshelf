import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    booksList: []
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            const newBook = {
                id: Date.now().toString(),
                isRead: false,
                ...action.payload,
                coverColor: "#E3A87C" // resim yoksa arkaplan olarak kalacak renk
            };

            state.booksList.unshift(newBook);
        },
        toggleReadStatus: (state, action) => {
            const bookId = action.payload;
            //kitabı bulmamız lazım
            const book = state.booksList.find((b) => b.id === bookId);
            if (book) {
                book.isRead = !book.isRead
            }
        },
        deleteBook: (state, action) => {
            const bookId = action.payload;
            state.booksList = state.booksList.filter((b) => b.id !== bookId);
        }
    }
});

export const { addBook, toggleReadStatus, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
