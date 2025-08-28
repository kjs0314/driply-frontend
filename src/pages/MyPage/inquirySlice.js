import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTab: '상품 Q&A내역',
    expandedRow: null,
    isModalOpen: false,
};

const inquirySlice = createSlice({
    name: 'inquiry',
    initialState,
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload;
        },
        setExpandedRow(state, action) {
            state.expandedRow = action.payload;
        },
        setModalOpen(state, action) {
            state.isModalOpen = action.payload;
        },
        resetInquiry(state) {
            state.activeTab = '상품 Q&A내역';
            state.expandedRow = null;
            state.isModalOpen = false;
        },
    },
});

export const { setActiveTab, setExpandedRow, setModalOpen, resetInquiry } = inquirySlice.actions;
export default inquirySlice.reducer;
