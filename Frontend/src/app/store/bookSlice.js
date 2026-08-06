import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    booksList: [],
    loading: false,
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.booksList = action.payload;
        },
        setBooksLoading: (state, action) => {
            state.loading = action.payload;
        },
        addBookLocal: (state, action) => {
            // Supabase'ten dönen gerçek veriyi listenin başına ekler
            state.booksList.unshift(action.payload);
        },
        updateBookLocal: (state, action) => {
            const updatedBook = action.payload;
            const index = state.booksList.findIndex((b) => b.id === updatedBook.id);
            if (index !== -1) {
                state.booksList[index] = { ...state.booksList[index], ...updatedBook };
            }
        },
        deleteBook: (state, action) => {
            const bookId = action.payload;
            state.booksList = state.booksList.filter((b) => b.id !== bookId);
        }
    }
});

export const { setBooks, setBooksLoading, addBookLocal, updateBookLocal, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;