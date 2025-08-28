import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeCategory: null,
    showSearch: false,
    isClosing: false,
    showCustomerService: false,
};

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setActiveCategory(state, action) {
            state.activeCategory = action.payload;
        },
        setShowSearch(state, action) {
            state.showSearch = action.payload;
        },
        setIsClosing(state, action) {
            state.isClosing = action.payload;
        },
        setShowCustomerService(state, action) {
            state.showCustomerService = action.payload;
        },
        resetHeaderState(state) {
            // 옵션: 전체 초기화
            Object.assign(state, initialState);
        },
    },
});

export const { setActiveCategory, setShowSearch, setIsClosing, setShowCustomerService, resetHeaderState } =
    headerSlice.actions;
export default headerSlice.reducer;
