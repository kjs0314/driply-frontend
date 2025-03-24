import React from 'react';
import './OrderHistory.css';

const OrderHistory = () => (
    <div className="order-history">
        <h1>주문내역 조회</h1>
        <button className="add-delivery-btn">배송지 추가</button>
        {[1, 2].map((item) => (
            <div key={item} className="order-item">
                {/* 주문 제목 */}
                <div className="order-title">
                    <p className="order-date">주문일자 2025.02.05</p>
                    <p className="order-detail">
                        <a href="/mypage/order-detail">주문 상세 &gt;</a>
                    </p>
                </div>

                {/* 상품 정보 */}
                <div className="order-info">
                    <div className="product-image" />
                    <div className="product-details">
                        <p className="product-name">토스티 블렌드 원두 커피 200g</p>
                        <p className="product-seller">커피스니퍼</p>
                        <p className="product-price">12,000원 | 1개</p>
                    </div>
                    <div className="order-actions">
                        <button>교환 신청</button>
                        <button>반품 신청</button>
                        <button className="review-btn">리뷰 작성</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default OrderHistory;
