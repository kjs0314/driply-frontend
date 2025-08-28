import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1,
    mockPosts: Array.from({ length: 37 }).map((_, i) => ({
        id: i + 1,
        user: '하루커피한잔',
        userDesc: '30대 집순이의 싱글라이프 #홈카페',
        image: `https://picsum.photos/seed/${i + 1}/300/300`,
        hashtags: ['#오늘의홈카페', '#제품소개'],
        content: '새로산 제품으로 꾸며본 우리집 홈카페 소개합니다!',
        likes: Math.floor(Math.random() * 50),
        comments: Math.floor(Math.random() * 20),
    })),
};

const communitySlice = createSlice({
    name: 'community',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
        // 필요하다면 목록이나 검색 추가 등도 reducer에 추가 가능
    },
});

export const { setPage } = communitySlice.actions;

export default communitySlice.reducer;
