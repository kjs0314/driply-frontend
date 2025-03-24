import React from 'react';
import './RefundDetail.css';

const RefundDetail = () => {
    return (
        <div className="refund-detail-section">
            {/* 취소 상품 정보 */}
            <section className="refund-section-detail">
                <h1>취소 상품 정보</h1>
                <div className="order-item">
                    {/* 주문 제목 */}
                    <div className="order-title">
                        <p className="order-date">상품</p>
                        <p className="order-number">진행상태</p>
                    </div>

                    {/* 상품 정보 */}
                    <div className="order-info">
                        <div className="product-image" />
                        <div className="product-details">
                            <p className="product-name">토스티 블렌드 원두 커피 200g</p>
                            <p className="product-seller">커피스니퍼</p>
                            <p className="product-price">12,000원 | 1개</p>
                        </div>
                        <div className="refund-reason">
                            <p>취소 완료</p>
                            <p>2/6(목) 이내 카드사 환불 예정</p>
                        </div>
                    </div>
                </div>
                {/* 취소 사유 */}
                <p className="refund-reason-detail">취소사유: 도착 예정일이 예상보다 늦음</p>
            </section>

            {/* 취소 환불 정보 */}
            <section className="refund-section">
                <h1>취소 환불 정보</h1>
                <div className="refund-info-section">
                    {/* 가격 정보 */}
                    <div className="refund-info">
                        <div className="row">
                            <div className="label">총 상품가격</div>
                            <div className="value">32,000 원</div>
                            <div className="label">배송비</div>
                            <div className="value">0 원</div>
                            <div className="label">반품비</div>
                            <div className="value">0 원</div>
                        </div>
                    </div>
                    <div className="refund-payment-method">
                        <div className="row">
                            <div className="refund-method">
                                <div className="label">환불 수단</div>
                                <div className="value">삼성 마스타 / 일시불 29,000</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="refund-complete">
                                <div className="label-complete-price">환불 완료</div>
                                <div className="value-complete-price">29,000 원</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RefundDetail;
