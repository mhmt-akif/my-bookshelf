import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: false,
    title: "",
    message: "",
    showCancel: false,
    cancelText: "Vazgeç",
    confirmText: "Evet",
    onConfirm: null,
};

export const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        showAlert: (state, action) => {
            state.visible = true;
            state.title = action.payload.title || "";
            state.message = action.payload.message || "";
            state.showCancel = action.payload.showCancel || false;
            state.cancelText = action.payload.cancelText || "Vazgeç";
            state.confirmText = action.payload.confirmText || "Evet";
            state.onConfirm = action.payload.onConfirm || null;
        },
        hideAlert: (state) => {
            state.visible = false;
            state.title = "";
            state.message = "";
            state.onConfirm = null;
        },
    },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
