import React from 'react';
import './OrderDetail.css';

const OrderDetail = () => {
    return (
        <div className="order-detail-section">
            {/* 주문 상세 정보 */}
            <section className="order-section">
                <h1>주문 상세정보</h1>
                <div className="order-status">
                    <div className="status-item active">0 주문접수</div>
                    <div className="status-arrow">&gt;</div>
                    <div className="status-item">0 결제완료</div>
                    <div className="status-arrow">&gt;</div>
                    <div className="status-item">0 배송준비중</div>
                    <div className="status-arrow">&gt;</div>
                    <div className="status-item active">1 배송중</div>
                    <div className="status-arrow">&gt;</div>
                    <div className="status-item active">1 배송완료</div>
                </div>
            </section>

            {/* 주문 상품 정보 */}
            <section className="order-section">
                <h1>주문 상품정보</h1>
                <div className="order-item">
                    {/* 주문 제목 */}
                    <div className="order-title">
                        <p className="order-date">주문일자 2025.02.05</p>
                        <p className="order-number">주문번호: 20250205-af1782256</p>
                    </div>

                    {/* 상품 정보 */}
                    <div className="order-info">
                        <div className="product-image" />
                        <div className="product-details">
                            <p className="product-name">토스티 블렌드 원두 커피 200g</p>
                            <p className="product-seller">커피스니퍼</p>
                            <p className="product-price">12,000원 | 1개</p>
                        </div>
                        <p class="delivery-status">배송중</p>
                        <div className="order-actions">
                            <button>교환 신청</button>
                            <button>반품 신청</button>
                            <button className="review-btn">리뷰 작성</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 구매자 정보 */}
            <section className="order-section">
                <h1>구매자정보</h1>
                <div className="buyer-info">
                    <div className="row">
                        <div className="buyer">주문자</div>
                        <div className="buyer-value">홍*동</div>
                        <div className="email">이메일 주소</div>
                        <div className="email-value">abcdef@*****.com</div>
                    </div>
                    <div className="row">
                        <div className="address">주소</div>
                        <div className="address-value">서울 강남구 역삼동 111-22, @@아파트</div>
                        <div className="phonenumber">휴대폰번호</div>
                        <div className="phonenumber-value">010-****-5678</div>
                    </div>
                </div>
            </section>

            {/* 결제 정보 */}
            <section className="order-section">
                <h1>결제 정보</h1>
                {/* 결제 수단 */}
                <div className="payment-section">
                    <div className="payment-method">
                        <div className="label">결제 수단</div>
                        <div className="value">삼성 마스터 / 일시불</div>
                    </div>

                    {/* 가격 정보 */}
                    <div className="price-info">
                        <div className="row">
                            <div className="label">총 상품가격</div>
                            <div className="value">32,000 원</div>
                            <div className="label">배송비</div>
                            <div className="value">0 원</div>
                        </div>
                        <div className="row">
                            <div className="label">할인금액</div>
                            <div className="value">-3,000 원</div>
                            <div className="label-total-price">총 결제금액</div>
                            <div className="value-total-price">29,000 원</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderDetail;
