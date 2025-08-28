import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTab: '상품 상세', // '상품 상세', '구매 정보', '리뷰', '상품 Q&A'
    selectedOption: '', // 옵션값(드롭다운)
    additionalConfig: '', // 추가구성(드롭다운)
    quantity: 1, // 수량
    // 필요시 모달 등도...
};

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload;
        },
        setSelectedOption(state, action) {
            state.selectedOption = action.payload;
        },
        setAdditionalConfig(state, action) {
            state.additionalConfig = action.payload;
        },
        setQuantity(state, action) {
            state.quantity = action.payload;
        },
        resetProductDetail(state) {
            Object.assign(state, initialState);
        },
    },
});

export const { setActiveTab, setSelectedOption, setAdditionalConfig, setQuantity, resetProductDetail } =
    productDetailSlice.actions;

export default productDetailSlice.reducer;
