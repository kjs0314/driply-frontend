import React from 'react';
// import { Link } from 'react-router-dom';
import './index.css';

const CartPage = () => {
    return (
        <div className="main">
            <div className="cart-container">
                <h2>SHOPPING CART</h2>

                <div className="cart-content">
                    <div className="cart-items">
                        <h3>장바구니 상품</h3>
                        <div className="empty-cart">
                            <p>장바구니에 담긴 상품이 없습니다.</p>
                            <p>장바구니에 상품을 추가해보세요.</p>
                            <button className="shopping-btn">쇼핑하러 가기</button>
                        </div>
                    </div>

                    <div className="cart-summary">
                        <h3>장바구니</h3>
                        <div className="summary-items">
                            <div className="summary-row">
                                <span>상품금액</span>
                                <span>+0 원</span>
                            </div>
                            <div className="summary-row">
                                <span>할인상품금액</span>
                                <span>+0 원</span>
                            </div>
                            <div className="summary-row">
                                <span>배송비</span>
                                <span>+0 원</span>
                            </div>
                            <div className="summary-total">
                                <span>최종 결제금액</span>
                                <span className="total-price">0원</span>
                            </div>
                        </div>
                        <button className="checkout-btn">선택한 상품 주문하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
