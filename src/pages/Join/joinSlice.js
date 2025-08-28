import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTab: 'user',
    customerForm: {
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        birthdate: '',
        phone: '',
        terms: {
            all: false,
            personal: false,
            privacy: false,
            sms: false,
            marketing: false,
        },
    },
    sellerForm: {
        username: '',
        password: '',
        confirmPassword: '',
        storeName: '',
        phone: '',
        representativeName: '',
        businessNumber: '',
        registrationNumber: '',
        communicationSalesNumber: '',
        terms: {
            all: false,
            businessTerms: false,
            privacy: false,
            sms: false,
            marketing: false,
        },
    },
};

const joinSlice = createSlice({
    name: 'join',
    initialState,
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload;
        },
        setCustomerForm(state, action) {
            state.customerForm = { ...state.customerForm, ...action.payload };
        },
        setSellerForm(state, action) {
            state.sellerForm = { ...state.sellerForm, ...action.payload };
        },
        setCustomerFormTerm(state, action) {
            state.customerForm.terms = { ...state.customerForm.terms, ...action.payload };
        },
        setSellerFormTerm(state, action) {
            state.sellerForm.terms = { ...state.sellerForm.terms, ...action.payload };
        },
        resetJoinForm(state) {
            Object.assign(state, initialState);
        },
    },
});

export const { setActiveTab, setCustomerForm, setSellerForm, setCustomerFormTerm, setSellerFormTerm, resetJoinForm } =
    joinSlice.actions;
export default joinSlice.reducer;
