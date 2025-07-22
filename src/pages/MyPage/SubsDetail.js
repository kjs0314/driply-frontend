import React from 'react';
import { useLocation } from 'react-router-dom';
import './SubsDetail.css';

const SubsDetail = () => {
    const location = useLocation();
    // const navigate = useNavigate();
    const { subscriptionId } = location.state || {};

    // 실제로는 subscriptionId로 API 호출해서 데이터 가져오기
    const detailData = {
        id: subscriptionId || 'ORD20250502-49039201',
        name: '1월 드리플리 박스 [1회차]',
        amount: '21,900원',
        paymentDate: '2025-01-17',
        deliveryDate: '2025-01-23',
        firstDate: '2025.02.05',
        receiver: {
            name: '홍*동',
            address: '서울 강남구 역삼동 111-22, @@아파트',
            email: 'abcdef@*****.com',
            phone: '010-****-5678',
        },
        pay: {
            method: '삼성 마스터 / 일시불',
            price: '32,000원',
            delivery: '0원',
            discount: '-3,000원',
            total: '29,000원',
        },
    };

    return (
        <div className="subs-detail-page">
            {/* <button className="subs-back-btn" onClick={() => navigate('/mypage/subscription')}>
                ← 구독 내역으로 돌아가기
            </button> */}

            <h1>정기배송 상세 정보</h1>

            <div className="subs-detail-main">
                <div className="subs-detail-header">
                    <span>
                        첫 구독 접수일 <strong>{detailData.firstDate}</strong>
                    </span>
                </div>

                <div className="subs-detail-product">
                    <div>
                        <div className="subs-thumb-large" />
                        <div className="subs-product-name">{detailData.name}</div>
                    </div>

                    <div className="subs-product-info">
                        <div className="subs-product-id">{detailData.id}</div>
                    </div>
                    <div className="subs-product-details">
                        <span>{detailData.paymentDate}</span>
                    </div>
                    <div className="subs-product-details">
                        <span>{detailData.deliveryDate}</span>
                    </div>
                    <div className="subs-product-details">
                        <span>{detailData.deliveryDate}</span>
                    </div>
                    <button className="subs-review-btn">리뷰 작성</button>
                </div>
            </div>

            {/* 이번 회차 수령자 정보 */}
            <div className="subs-section">
                <h2>이번 회차 수령자 정보</h2>
                <table className="subs-info-table">
                    <tbody>
                        <tr>
                            <th>주문자</th>
                            <td>{detailData.receiver.name}</td>
                            <th>이메일 주소</th>
                            <td>{detailData.receiver.email}</td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>{detailData.receiver.address}</td>
                            <th>휴대폰번호</th>
                            <td>{detailData.receiver.phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* 다음 회차 수령자 정보 */}
            <div className="subs-section">
                <h2>다음 회차 수령자 정보</h2>
                <table className="subs-info-table">
                    <tbody>
                        <tr>
                            <th>주문자</th>
                            <td>{detailData.receiver.name}</td>
                            <th>이메일 주소</th>
                            <td>{detailData.receiver.email}</td>
                        </tr>
                        <tr>
                            <th>주소</th>
                            <td>{detailData.receiver.address}</td>
                            <th>휴대폰번호</th>
                            <td>{detailData.receiver.phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="subs-notice">
                <p>* 수령자 정보 변경 시 이후 회차에 동일하게 반영됩니다.</p>
                <p>* 이번 회차가 결제 완료된 경우, 다음 회차부터 수령자 정보 변경이 가능합니다.</p>
                <button className="subs-change-info-btn">다음 회차부터 수령자 정보 변경</button>
            </div>

            {/* 결제 정보 */}
            <div className="subs-section">
                <h2>결제 정보</h2>
                <table className="subs-payment-table">
                    <tbody>
                        <tr>
                            <th>결제 수단</th>
                            <td>{detailData.pay.method}</td>
                            <th>총 상품가격</th>
                            <td className="price-cell">{detailData.pay.price}</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td></td>
                            <th>배송비</th>
                            <td className="price-cell">{detailData.pay.delivery}</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td></td>
                            <th>할인금액</th>
                            <td className="price-cell">{detailData.pay.discount}</td>
                        </tr>
                        <tr className="total-row">
                            <th></th>
                            <td></td>
                            <th>총 결제금액</th>
                            <td className="price-cell total-price">{detailData.pay.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubsDetail;
