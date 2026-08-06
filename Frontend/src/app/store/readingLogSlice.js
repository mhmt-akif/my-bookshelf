import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logs: [],
    loading: false,
};

const readingLogSlice = createSlice({
    name: "readingLogs",
    initialState,
    reducers: {
        setReadingLogs: (state, action) => {
            state.logs = action.payload;
        },
        setReadingLogsLoading: (state, action) => {
            state.loading = action.payload;
        },
        addReadingLogLocal: (state, action) => {
            state.logs.unshift(action.payload);
        },
        deleteReadingLogLocal: (state, action) => {
            const logId = action.payload;
            state.logs = state.logs.filter((log) => log.id !== logId);
        },
    },
});

export const { setReadingLogs, setReadingLogsLoading, addReadingLogLocal, deleteReadingLogLocal } = readingLogSlice.actions;
export default readingLogSlice.reducer;
