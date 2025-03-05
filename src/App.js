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
                    <Route path="/category/category/:id" element={<CategoryPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
