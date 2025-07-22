import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    buyer: {
        name: '홍길동',
        email: 'abcd1234',
        emailDomain: 'naver.com',
        phonePrefix: '010',
        phoneNumber: '1234-5678',
    },
    selectedCoupon: '',
    paymentMethod: '카드/체크카드',
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setBuyer(state, action) {
            state.buyer = { ...state.buyer, ...action.payload };
        },
        setSelectedCoupon(state, action) {
            state.selectedCoupon = action.payload;
        },
        setPaymentMethod(state, action) {
            state.paymentMethod = action.payload;
        },
    },
});

export const { setBuyer, setSelectedCoupon, setPaymentMethod } = orderSlice.actions;
export default orderSlice.reducer;
