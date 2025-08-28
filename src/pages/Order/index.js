import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBuyer, setSelectedCoupon, setPaymentMethod } from './orderSlice';
import './index.css';
import AddressModal from './AddressModal';

const orderProducts = [
    {
        id: 1,
        brand: '(주)스윕',
        name: '토스티 블렌드 원두 커피 200g',
        category: '커피스니퍼',
        price: 12000,
        qty: 1,
        delivery: 3500,
        img: '',
    },
    {
        id: 2,
        brand: '(주)스윕',
        name: '토스티 블렌드 원두 커피 200g',
        category: '커피스니퍼',
        price: 12000,
        qty: 1,
        delivery: 3500,
        img: '',
    },
    {
        id: 3,
        brand: '주식회사 엘리먼트',
        name: '크림앤페퍼 플레이트 (무광 브런치 홈카페 접시)',
        category: '크림앤페퍼',
        price: 25200,
        qty: 1,
        delivery: 3500,
        img: '',
    },
];

const paymentMethods = ['카드/체크카드', '가상계좌', '무통장입금', '네이버페이', '카카오페이', '토스'];

// 브랜드별로 상품을 묶는 함수
const groupByBrand = (products) => {
    const brandMap = {};
    products.forEach((item) => {
        if (!brandMap[item.brand]) brandMap[item.brand] = [];
        brandMap[item.brand].push(item);
    });
    return Object.entries(brandMap).map(([brand, items]) => ({
        brand,
        items,
    }));
};

const coupons = [
    { id: '', name: '쿠폰변경', discount: 0 },
    { id: 'coupon1', name: '2월 쇼핑 22% 할인 쿠폰', discount: 3800 },
    { id: 'coupon2', name: '3월 쇼핑 15% 할인 쿠폰', discount: 2500 },
    { id: 'coupon3', name: '신규 회원 10% 할인 쿠폰', discount: 1500 },
];

// const userInfo = {
//     name: '홍길동',
//     address: '서울 강남구 역삼동 111-2 가나다라 아파트, 107동 2304호',
//     phone: '010-1234-5678',
//     isDefault: true,
// };

const OrderPage = () => {
    const [addressModalOpen, setAddressModalOpen] = useState(false);

    // Redux 상태 연결
    const dispatch = useDispatch();
    const buyer = useSelector((state) => state.order.buyer);
    const selectedCoupon = useSelector((state) => state.order.selectedCoupon);
    const paymentMethod = useSelector((state) => state.order.paymentMethod);

    // 입력값 변경 핸들러 (buyer)
    const handleBuyerChange = (e) => {
        const { name, value } = e.target;
        dispatch(setBuyer({ [name]: value }));
    };

    // 쿠폰 선택 핸들러
    const handleCouponChange = (e) => {
        dispatch(setSelectedCoupon(e.target.value));
    };

    // 결제수단 버튼
    const handlePaymentClick = (method) => {
        dispatch(setPaymentMethod(method));
    };

    // 결제금액 계산
    const selectedCouponObj = coupons.find((c) => c.id === selectedCoupon) || { discount: 0 };
    const couponDiscount = selectedCouponObj.discount;

    const totalProductPrice = orderProducts.reduce((sum, item) => sum + item.price * item.qty, 0);
    const uniqueBrandDeliveries = {};
    orderProducts.forEach((item) => {
        if (!uniqueBrandDeliveries[item.brand]) {
            uniqueBrandDeliveries[item.brand] = item.delivery || 0;
        }
    });
    const totalDelivery = Object.values(uniqueBrandDeliveries).reduce((sum, d) => sum + d, 0);
    const finalPrice = totalProductPrice + totalDelivery - couponDiscount;

    // 브랜드별로 상품 묶기
    const groupedProducts = groupByBrand(orderProducts);

    // Redux에서 선택된 배송지
    const selectedAddress = useSelector((state) => state.order.selectedAddress);

    return (
        <div className="main">
            <div className="order-page">
                <h2>주문하기</h2>
                <div className="order-content">
                    {/* 좌측: 주문 폼 */}
                    <div className="order-left">
                        {/* 배송지 섹션 */}
                        <section className="order-section order-shipping-section">
                            <div className="order-section-header order-shipping-header">
                                배송지
                                <button className="order-shipping-edit-btn" onClick={() => setAddressModalOpen(true)}>
                                    배송지 변경
                                </button>
                            </div>
                            <div className="order-shipping-info">
                                <div className="order-shipping-row">
                                    <span className="order-shipping-name">
                                        {selectedAddress.name}
                                        {selectedAddress.isDefault && (
                                            <span className="order-shipping-default">기본배송지</span>
                                        )}
                                    </span>
                                </div>
                                <div className="order-shipping-address">{selectedAddress.address}</div>
                                <span className="order-shipping-phone">{selectedAddress.phone}</span>
                            </div>
                            <div className="order-shipping-request">
                                <select>
                                    <option>배송시 요청사항을 선택해주세요.</option>
                                    <option>문 앞에 놓아주세요.</option>
                                    <option>배송 전 연락주세요.</option>
                                    {/* 기타 옵션 */}
                                </select>
                            </div>
                            {addressModalOpen && <AddressModal onClose={() => setAddressModalOpen(false)} />}
                        </section>
                        {/* 주문자 */}
                        <section className="order-section">
                            <div className="order-section-header">주문자</div>
                            <div className="order-buyer-form">
                                <div className="order-buyer-row-name">
                                    <label>이름</label>
                                    <input type="text" name="name" value={buyer.name} onChange={handleBuyerChange} />
                                </div>
                                <div className="order-buyer-row-email">
                                    <label>이메일</label>
                                    <input type="text" name="email" value={buyer.email} onChange={handleBuyerChange} />
                                    <span className="order-email-at">@</span>
                                    <select name="emailDomain" value={buyer.emailDomain} onChange={handleBuyerChange}>
                                        <option value="naver.com">naver.com</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="daum.net">daum.net</option>
                                    </select>
                                </div>
                                <div className="order-buyer-row-phone">
                                    <label>전화번호</label>
                                    <select name="phonePrefix" value={buyer.phonePrefix} onChange={handleBuyerChange}>
                                        <option value="010">010</option>
                                        <option value="011">011</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        value={buyer.phoneNumber}
                                        onChange={handleBuyerChange}
                                    />
                                </div>
                            </div>
                        </section>
                        {/* 주문상품 */}
                        <section className="order-section">
                            <div className="order-section-header">
                                주문상품 <span className="order-section-count">{orderProducts.length}건</span>
                            </div>
                            <div className="order-product-list">
                                {groupedProducts.map((group, idx) => (
                                    <div className="order-product-group" key={group.brand}>
                                        <div className="order-product-brand-group">
                                            <span className="order-product-brand">{group.brand}</span>
                                            <span className="order-product-brand-delivery">
                                                {group.items[0].delivery
                                                    ? `배송비 ${group.items[0].delivery.toLocaleString()}원`
                                                    : '무료배송'}
                                            </span>
                                        </div>
                                        {group.items.map((item) => (
                                            <div className="order-product-row" key={item.id}>
                                                <div className="order-product-thumb" />
                                                <div className="order-product-info">
                                                    <div className="order-product-name">{item.name}</div>
                                                    <div className="order-product-category">{item.category}</div>
                                                    <div className="order-product-price">
                                                        {item.price.toLocaleString()}원{' '}
                                                        <span className="order-product-qty">{item.qty}개</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </section>
                        {/* 할인정보 */}
                        <section className="order-section">
                            <div className="order-section-header order-section-header--row">
                                <span>할인정보</span>
                                <span className="order-section-caption">사용 가능한 쿠폰이 없어요.</span>
                            </div>
                            <div className="order-discount-row">
                                <div className="order-discount-label">쿠폰할인</div>
                                <select
                                    className="order-discount-select"
                                    value={selectedCoupon}
                                    onChange={handleCouponChange}
                                >
                                    {coupons.map((coupon) => (
                                        <option key={coupon.id} value={coupon.id}>
                                            {coupon.name}
                                            {coupon.discount > 0 ? ` (-${coupon.discount.toLocaleString()}원)` : ''}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="order-discount-row">
                                <div className="order-discount-label">포인트</div>
                                <input className="order-discount-input" value="0" />
                                <button className="order-discount-btn">전액사용</button>
                            </div>
                            <div className="order-discount-caption">
                                사용 가능한 포인트 <span className="order-discount-point">1200원</span>
                            </div>
                        </section>
                        {/* 결제정보 */}
                        <section className="order-section">
                            <div className="order-section-header">결제정보</div>
                            <div className="order-payment-methods">
                                <div className="order-payment-method-group">
                                    <div className="order-radio">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                                            <circle cx="9" cy="9.5" r="9" fill="#212122" />
                                            <circle cx="9" cy="9.5" r="4.5" fill="white" />
                                        </svg>
                                        일반결제
                                    </div>
                                    <div className="order-pay-btns">
                                        {paymentMethods.map((pm) => (
                                            <button
                                                key={pm}
                                                className={`order-pay-btn${paymentMethod === pm ? ' active' : ''}`}
                                                onClick={() => handlePaymentClick(pm)}
                                            >
                                                {pm}
                                            </button>
                                        ))}
                                    </div>
                                    <div></div>
                                    <div className="order-payment-selects">
                                        <select>
                                            <option>카드선택</option>
                                        </select>
                                        <select>
                                            <option>일시불</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* 우측: 결제 정보 */}
                    <div className="order-right">
                        <div className="order-payment-box">
                            <div className="order-section-header1">결제정보</div>
                            <div className="order-payment-row">
                                <span>상품금액</span>
                                <span>{totalProductPrice.toLocaleString()}원</span>
                            </div>
                            <div className="order-payment-row">
                                <span>쿠폰할인</span>
                                <span>-{couponDiscount ? couponDiscount.toLocaleString() : 0}원</span>
                            </div>
                            <div className="order-payment-row1">
                                <span>기본할인</span>
                                <span>-0원</span>
                            </div>
                            <div className="order-payment-divider" />
                            <div className="order-payment-row">
                                <span>배송비</span>
                                <span>{totalDelivery > 0 ? `+${totalDelivery.toLocaleString()}원` : '무료'}</span>
                            </div>
                            <div className="order-payment-divider1" />
                            <div className="order-payment-total-row">
                                <span>최종 결제금액</span>
                                <span className="order-payment-total">{finalPrice.toLocaleString()}원</span>
                            </div>
                        </div>
                        <div className="order-payment-agreements">
                            <div>
                                구매동의 항목 <span className="order-payment-link">보기</span>
                            </div>
                            <div>
                                전자상거래법 이행항목 동의 <span className="order-payment-link">보기</span>
                            </div>
                            <div>
                                개인정보 수집 및 이용 동의 <span className="order-payment-link">보기</span>
                            </div>
                        </div>
                        <button className="order-submit-btn">선택한 상품 주문하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
