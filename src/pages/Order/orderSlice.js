import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    buyer: {
        name: '홍길동',
        email: 'abcd1234',
        emailDomain: 'naver.com',
        phonePrefix: '010',
        phoneNumber: '1234-5678',
    },
    selectedAddress: {
        id: 1,
        name: '홍길동',
        address: '서울 강남구 역삼동 111-2 가나다라 아파트, 107동 2304호',
        phone: '010-1234-5678',
        isDefault: true,
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
        setSelectedAddress(state, action) {
            state.selectedAddress = action.payload;
        },
    },
});

export const { setBuyer, setSelectedCoupon, setPaymentMethod, setSelectedAddress } = orderSlice.actions;
export default orderSlice.reducer;
