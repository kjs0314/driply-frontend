import React from 'react';

// import "./styles.css";
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import CartPage from './pages/Cart';
import JoinCustomer from './pages/Join/JoinCustomer';
import JoinSeller from './pages/Join/JoinSeller';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProductPage from "./product";
// import UploadPage from "./upload";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryPage from './pages/Category/CategoryPage';
import SubcategoryPage from './pages/Category/SubcategoryPage';
import MyPageLayout from './components/MyPageLayout';
import OrderHistory from './pages/MyPage/OrderHistory';
import OrderDetail from './pages/MyPage/OrderDetail';
import Refund from './pages/MyPage/Refund';
import RefundDetail from './pages/MyPage/RefundDetail';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/join/customer" element={<JoinCustomer />} />
                    <Route path="/join/seller" element={<JoinSeller />} />
                    <Route path="/cart" element={<CartPage />} />
                    {/* 카테고리 페이지 */}
                    <Route path="/category/:categoryId/:subcategoryId" element={<CategoryPage />} />
                    <Route path="/category/:categoryId/:subcatId/:itemIndex" element={<SubcategoryPage />} />

                    {/* 마이페이지 */}
                    <Route path="/mypage/*" element={<MyPageLayout />}>
                        {/* 중첩된 라우트 */}
                        <Route path="order-history" element={<OrderHistory />} />
                        {/* 다른 마이페이지 컴포넌트 추가 가능 */}
                        <Route path="order-detail" element={<OrderDetail />} />
                        <Route path="refund" element={<Refund />} />
                        <Route path="refund-detail" element={<RefundDetail />} />
                    </Route>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
