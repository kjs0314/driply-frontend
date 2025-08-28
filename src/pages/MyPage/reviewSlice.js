import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTab: '내 리뷰', // '내 리뷰' or '작성 가능한 리뷰'
    isModalOpen: false, // 리뷰쓰기 모달
    // 이하 확장: 작성 중 리뷰폼 등도 필요시 추가
};

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload;
        },
        setModalOpen(state, action) {
            state.isModalOpen = action.payload;
        },
        resetReviewState(state) {
            Object.assign(state, initialState);
        },
        // 필요시 setReviewForm 등 추가해 리뷰 입력도 전역 상태로 관리 가능!
    },
});

export const { setActiveTab, setModalOpen, resetReviewState } = reviewSlice.actions;

export default reviewSlice.reducer;
