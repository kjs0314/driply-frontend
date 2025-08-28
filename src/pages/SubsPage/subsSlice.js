import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTab: 'guide', // 'guide' or 'collection'
    openIndex: null, // 오픈된 FAQ 인덱스
};

const subsSlice = createSlice({
    name: 'subs',
    initialState,
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload;
        },
        setOpenIndex(state, action) {
            state.openIndex = action.payload;
        },
        resetSubs(state) {
            Object.assign(state, initialState);
        },
    },
});

export const { setActiveTab, setOpenIndex, resetSubs } = subsSlice.actions;
export default subsSlice.reducer;
