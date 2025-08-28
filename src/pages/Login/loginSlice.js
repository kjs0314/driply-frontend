import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeTab: 'user', // 'user' or 'seller'
    loginForm: {
        username: '',
        password: '',
    },
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload;
        },
        setLoginForm(state, action) {
            state.loginForm = { ...state.loginForm, ...action.payload };
        },
        resetLoginForm(state) {
            state.activeTab = 'user';
            state.loginForm = initialState.loginForm;
        },
    },
});

export const { setActiveTab, setLoginForm, resetLoginForm } = loginSlice.actions;
export default loginSlice.reducer;
