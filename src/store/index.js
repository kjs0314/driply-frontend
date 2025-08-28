import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../pages/Order/orderSlice';
import headerReducer from '../components/headerSlice';
import loginReducer from '../pages/Login/loginSlice';
import communityReducer from '../pages/Community/communitySlice';
import joinReducer from '../pages/Join/joinSlice';
import inquiryReducer from '../pages/MyPage/inquirySlice';
import reviewReducer from '../pages/MyPage/reviewSlice';
import productDetailReducer from '../pages/Product/productDetailSlice';
import subsReducer from '../pages/SubsPage/subsSlice';

const store = configureStore({
    reducer: {
        header: headerReducer,
        login: loginReducer,
        community: communityReducer,
        order: orderReducer,
        join: joinReducer,
        inquiry: inquiryReducer,
        review: reviewReducer,
        productDetail: productDetailReducer,
        subs: subsReducer,
    },
});
export default store;
