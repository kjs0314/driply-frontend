import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import { setActiveTab, setSelectedOption, setAdditionalConfig, setQuantity } from './productDetailSlice';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openQnaId, setOpenQnaId] = useState(null);

    const infoSectionRef = useRef(null);
    const purchaseSectionRef = useRef(null);
    const reviewSectionRef = useRef(null);
    const qnaSectionRef = useRef(null);

    // Redux 상태값 가져오기
    const activeTab = useSelector((state) => state.productDetail.activeTab);
    const selectedOption = useSelector((state) => state.productDetail.selectedOption);
    const additionalConfig = useSelector((state) => state.productDetail.additionalConfig);
    const quantity = useSelector((state) => state.productDetail.quantity);

    // 탭 핸들러
    // const onTabClick = (tab) => dispatch(setActiveTab(tab));
    const handleTabClick = (tab) => {
        dispatch(setActiveTab(tab));
        if (tab === '상품 상세' && infoSectionRef.current) {
            infoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (tab === '구매 정보' && purchaseSectionRef.current) {
            purchaseSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (tab === '리뷰' && reviewSectionRef.current) {
            reviewSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (tab === '상품 Q&A' && qnaSectionRef.current) {
            qnaSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    };
    // 옵션/구성 핸들러
    const handleOptionChange = (e) => dispatch(setSelectedOption(e.target.value));
    const handleConfigChange = (e) => dispatch(setAdditionalConfig(e.target.value));

    // 수량 증감 (수정 필요)
    const handleQuantityChange = (e) => dispatch(setQuantity(e.target.value));

    const handleBuy = () => {
        navigate(`/product/1/order`);
        // 만약 동적 productId라면 useParams()로 가져오세요
    };

    // 총 상품 금액 계산
    // 실제 상품 데이터/옵션별 금액 반영 필요
    const basePrice = 29500;
    const totalPrice = basePrice * quantity;

    const qnaList = [
        {
            id: 1,
            status: '답변완료',
            title: '주문하면 언제 받을 수 있나요?',
            content: '언제 가능한가요?',
            isSecret: false,
            author: 'abc****',
            date: '2025.02.01',
        },
        {
            id: 2,
            status: '답변완료',
            title: '비밀글 입니다.',
            content: '',
            isSecret: true,
            author: 'abc****',
            date: '2025.02.01',
        },
        {
            id: 3,
            status: '답변완료',
            title: '블랙 컬러 재입고 언제 되나요?',
            content: '언제 가능한가요?',
            isSecret: false,
            author: 'mell****',
            date: '2025.01.14',
        },
        {
            id: 4,
            status: '답변완료',
            title: '오늘 선물용으로 주문했어요. 수요일전에 배송 받을 수 있는지 확인 부탁드립니다.',
            content: '친구 생일선물로 주문했습니다.\n수요일까지 배송 가능할까요?',
            isSecret: false,
            author: 'qwer**',
            date: '2025.01.07',
            answer: '안녕하세요. 오늘 당일출고 예정입니다. 감사합니다.',
            answerDate: '2025.01.07',
        },
    ];
    const handleRowClick = (id) => {
        setOpenQnaId(openQnaId === id ? null : id);
    };

    return (
        <div className="main">
            <div className="breadcrumb">홈카페 &gt; 에스프레소머신</div>
            <div className="product-detail-container">
                {/* 왼쪽 이미지 섹션 */}
                <div className="image-section">
                    <div className="main-image"></div>
                    <div className="thumbnail-images">
                        <div className="thumbnail-image"></div>
                        <div className="thumbnail-image"></div>
                        <div className="thumbnail-image"></div>
                        <div className="thumbnail-image"></div>
                    </div>
                </div>

                {/* 오른쪽 상품 정보 섹션 */}
                <div className="info-section">
                    <div className="brand-name">
                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.80674 2.70635C3.70687 1.80649 4.92755 1.30097 6.20034 1.30097C7.47313 1.30097 8.69381 1.80649 9.59394 2.70635L11.0003 4.11155L12.4067 2.70635C12.8495 2.2479 13.3792 1.88223 13.9648 1.63066C14.5504 1.3791 15.1803 1.24669 15.8176 1.24115C16.455 1.23561 17.087 1.35706 17.6769 1.59841C18.2668 1.83975 18.8028 2.19617 19.2534 2.64685C19.7041 3.09754 20.0605 3.63347 20.3019 4.22337C20.5432 4.81327 20.6647 5.44533 20.6591 6.08268C20.6536 6.72002 20.5212 7.34987 20.2696 7.93549C20.0181 8.52111 19.6524 9.05077 19.1939 9.49355L11.0003 17.6883L2.80674 9.49355C1.90688 8.59342 1.40137 7.37274 1.40137 6.09995C1.40137 4.82716 1.90688 3.60648 2.80674 2.70635V2.70635Z"
                                stroke="#D9D9D9"
                                stroke-width="2"
                                stroke-linejoin="round"
                            />
                        </svg>
                        스타우브
                    </div>
                    <div className="product-name">[무료배송] 미드센추리 컬러 커피 머신</div>
                    <div className="rating">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 1.29395L8.854 5.04995L13 5.65595L10 8.57795L10.708 12.7059L7 10.7559L3.292 12.7059L4 8.57795L1 5.65595L5.146 5.04995L7 1.29395Z"
                                fill="#212122"
                                stroke="#212122"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        4.8
                        <div className="review-link">115개 리뷰보기</div>
                    </div>
                    <div className="price">
                        <span className="original-price">51,000원</span>
                        <div className="discount-section">
                            <span className="discount-percent">42%</span>
                            <span className="discount-price">29,500원</span>
                        </div>
                    </div>

                    {/* 최대 할인 적용가 섹션 */}
                    <div className="discount-box">
                        <table className="discount-table">
                            <tbody>
                                <tr>
                                    <td>최대 할인 적용가</td>
                                    <td className="highlight-cell">42%</td>
                                    <td>29,500원</td>
                                </tr>
                                <tr>
                                    <td>상품 할인</td>
                                    <td></td>
                                    <td>29,500</td>
                                </tr>
                                <tr className="final-row">
                                    <td>쿠폰 할인</td>
                                    <td className="coupon-cell">
                                        <svg
                                            width="12"
                                            height="13"
                                            viewBox="0 0 12 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                width="12"
                                                height="12"
                                                transform="translate(0 0.304443)"
                                                fill="black"
                                            />
                                            <path
                                                d="M1.82715 4.39331L6.00071 8.21567L10.1729 4.39331"
                                                stroke="white"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        2월 쇼핑 22% 할인 쿠폰
                                    </td>
                                    <td>29,500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* 배송 정보 및 혜택 */}
                    <div className="benefits">
                        배송비 무료
                        <br />
                        혜택: 신규 회원가입 20% APP 쿠폰, 2월 신용카드 무이자 할부 이벤트
                    </div>

                    {/* 옵션 선택 */}
                    <div className="options">
                        <label htmlFor="option-select">옵션 선택:</label>
                        <select id="option-select" value={selectedOption} onChange={handleOptionChange}>
                            <option value="">선택해주세요</option>
                            {/* 옵션 추가 */}
                            <option value="option1">옵션 1</option>
                            <option value="option2">옵션 2</option>
                        </select>
                    </div>

                    {/* 추가 구성 선택 */}
                    <div className="additional-config">
                        <label htmlFor="additional-select">추가 구성:</label>
                        <select id="additional-select" value={additionalConfig} onChange={handleConfigChange}>
                            <option value="">선택해주세요</option>
                            {/* 추가 구성 옵션 */}
                            <option value="config1">구성 1</option>
                            <option value="config2">구성 2</option>
                        </select>
                    </div>

                    {/* 수량 선택 */}
                    <div className="quantity-section">
                        <button onClick={() => dispatch(setQuantity(Math.max(1, quantity - 1)))}>-</button>
                        <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />
                        <button onClick={() => dispatch(setQuantity(quantity + 1))}>+</button>
                    </div>

                    {/* 총 상품 금액 및 장바구니 버튼 */}
                    <div className="total-price">
                        총 상품 금액: <strong>{totalPrice.toLocaleString()}원</strong>
                    </div>

                    <div className="buttton-section">
                        <button className="cart-button">장바구니</button>
                        <button className="buy-button" onClick={handleBuy}>
                            구매
                        </button>
                    </div>
                </div>
            </div>
            {/* 탭 섹션 */}
            <div className="tab-container">
                <div
                    className={`tab-item ${activeTab === '상품 상세' ? 'active' : ''}`}
                    onClick={() => handleTabClick('상품 상세')}
                >
                    상품 상세
                </div>
                <div
                    className={`tab-item ${activeTab === '구매 정보' ? 'active' : ''}`}
                    onClick={() => handleTabClick('구매 정보')}
                >
                    구매 정보
                </div>
                <div
                    className={`tab-item ${activeTab === '리뷰' ? 'active' : ''}`}
                    onClick={() => handleTabClick('리뷰')}
                >
                    리뷰
                </div>
                <div
                    className={`tab-item ${activeTab === '상품 Q&A' ? 'active' : ''}`}
                    onClick={() => handleTabClick('상품 Q&A')}
                >
                    상품 Q&A
                </div>
            </div>

            {/* 상품 상세_이미지 예정 */}
            <div ref={infoSectionRef} className="tab-content"></div>

            {/* 상품정보 보기 섹션 */}
            <div ref={purchaseSectionRef} className="info-section-container">
                <div className="info-section">
                    <h3 className="section-title">상품정보 보기</h3>
                    <div className="info-item-section">
                        <div className="info-item">
                            <span className="info-label">제품 소개</span>
                            <span className="info-value">주식회사 스타우브</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">색상</span>
                            <span className="info-value">주식회사 스타우브</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">차수</span>
                            <span className="info-value">주식회사 스타우브</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">제조자</span>
                            <span className="info-value">주식회사 스타우브</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">제조국</span>
                            <span className="info-value">주식회사 스타우브</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">품질보증기준</span>
                            <span className="info-value">주식회사 스타우브</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">A/S 책임자와 전화번호</span>
                            <span className="info-value">주식회사 스타우브</span>
                        </div>
                    </div>
                </div>

                {/* 판매자 정보 섹션 */}
                <div className="info-section">
                    <h3 className="section-title">판매자 정보</h3>
                    <div className="info-item-section">
                        <div className="info-item">
                            <span className="info-label">상호명</span>
                            <span className="info-value">주식회사 스타우브</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">사업자등록번호</span>
                            <span className="info-value">1234567890</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">통신판매업번호</span>
                            <span className="info-value">1111-2222-3333</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">대표자</span>
                            <span className="info-value">주식회사 스타우브</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">사업장 소재지</span>
                            <span className="info-value">주식회사 스타우브</span>
                        </div>
                    </div>
                </div>

                {/* 교환/반품/환불 섹션 */}
                <div className="exchange-section">
                    <h3 className="section-title">교환/반품/환불</h3>
                    <div className="exchange-info-section">
                        <div className="exchange-info-item">
                            <span className="info-label">교환 </span>
                            <span className="info-value">
                                <ul className="exchange-info">
                                    <li> 상품 수령일로부터 7일 이내 교환 신청이 가능합니다.</li>
                                    <li> 교환은 상품 불량 및 오배송에 한해 동일한 상품으로 교환이 가능합니다.</li>
                                    <li> 단순 변심에 의한 반품은 고객님께서 배송비를 부담하셔야 합니다.</li>
                                    <li> 반품은 상품 수령일로부터 7일 이내 신청이 가능합니다.</li>
                                    <li> 반품 시 상품 및 구성품이 훼손되지 않아야 반품 처리 가능합니다.</li>
                                    <li> 환불은 반품된 상품 확인 후 처리됩니다.</li>
                                    <li> 기타 자세한 사항은 고객센터로 문의 바랍니다.</li>
                                </ul>
                            </span>
                        </div>

                        <div className="exchange-info-item">
                            <span className="info-label">반품 </span>
                            <span className="info-value">
                                <ul className="exchange-info">
                                    <li> 상품 수령일로부터 7일 이내 교환 신청이 가능합니다.</li>
                                    <li> 교환은 상품 불량 및 오배송에 한해 동일한 상품으로 교환이 가능합니다.</li>
                                    <li> 단순 변심에 의한 반품은 고객님께서 배송비를 부담하셔야 합니다.</li>
                                    <li> 반품은 상품 수령일로부터 7일 이내 신청이 가능합니다.</li>
                                    <li> 반품 시 상품 및 구성품이 훼손되지 않아야 반품 처리 가능합니다.</li>
                                    <li> 환불은 반품된 상품 확인 후 처리됩니다.</li>
                                    <li> 기타 자세한 사항은 고객센터로 문의 바랍니다.</li>
                                </ul>
                            </span>
                        </div>

                        <div className="exchange-info-item">
                            <span className="info-label">환불 </span>
                            <span className="info-value">
                                <ul className="exchange-info">
                                    <li> 상품 수령일로부터 7일 이내 교환 신청이 가능합니다.</li>
                                    <li> 교환은 상품 불량 및 오배송에 한해 동일한 상품으로 교환이 가능합니다.</li>
                                    <li> 단순 변심에 의한 반품은 고객님께서 배송비를 부담하셔야 합니다.</li>
                                    <li> 반품은 상품 수령일로부터 7일 이내 신청이 가능합니다.</li>
                                    <li> 반품 시 상품 및 구성품이 훼손되지 않아야 반품 처리 가능합니다.</li>
                                    <li> 환불은 반품된 상품 확인 후 처리됩니다.</li>
                                    <li> 기타 자세한 사항은 고객센터로 문의 바랍니다.</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 리뷰 섹션 */}
            <div ref={reviewSectionRef} className="review-section">
                <h3 className="review-title">
                    전체 리뷰수 <span className="review-count">27</span>
                </h3>

                {/* 포토 리뷰 */}
                <div className="photo-review">
                    <div className="photo-item"></div>
                    <div className="photo-item"></div>
                    <div className="photo-item"></div>
                    <div className="photo-item"></div>
                    <div className="photo-item"></div>
                    <div className="photo-item"></div>
                    <div className="photo-item"></div>
                    <div className="photo-item"></div>
                    <div className="photo-item"></div>
                    <div className="photo-item"></div>
                    <div className="photo-item"></div>
                </div>

                {/* 리뷰 정렬 옵션 */}
                <div className="review-sort">
                    <span>최신순</span>
                    <span>별점 높은순</span>
                    <span>별점 낮은순</span>
                </div>

                {/* 개별 리뷰 */}
                <div className="review-item">
                    <div className="review-header">
                        <span className="review-rating">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 1.29395L8.854 5.04995L13 5.65595L10 8.57795L10.708 12.7059L7 10.7559L3.292 12.7059L4 8.57795L1 5.65595L5.146 5.04995L7 1.29395Z"
                                        fill="#212122"
                                        stroke="#212122"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ))}
                        </span>
                        <span className="review-color">White</span>
                        <span className="review-user">suj*******</span>
                    </div>
                    <div className="review-content">
                        <p className="review-text">
                            크기도 생각했던 대로고 컬러도 고급스러워요. 인테리어용으로도 너무 예쁩니다 !!
                        </p>
                        <div className="review-images">
                            <div className="review-image"></div>
                            <div className="review-image"></div>
                            <div className="review-image"></div>
                        </div>
                        <span className="review-date">2025.02.05</span>
                    </div>
                </div>

                {/* 추가 리뷰 아이템 (복사해서 반복 가능) */}
                <div className="review-item">
                    <div className="review-header">
                        <span className="review-rating">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 1.29395L8.854 5.04995L13 5.65595L10 8.57795L10.708 12.7059L7 10.7559L3.292 12.7059L4 8.57795L1 5.65595L5.146 5.04995L7 1.29395Z"
                                        fill="#212122"
                                        stroke="#212122"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ))}
                        </span>
                        <span className="review-color">White</span>
                        <span className="review-user">suj*******</span>
                    </div>
                    <div className="review-content">
                        <p className="review-text">
                            크기도 생각했던 대로고 컬러도 고급스러워요. 인테리어용으로도 너무 예쁩니다 !!
                        </p>
                        <div className="review-images">
                            <div className="review-image"></div>
                            <div className="review-image"></div>
                            <div className="review-image"></div>
                        </div>
                        <span className="review-date">2025.02.05</span>
                    </div>
                </div>

                <div className="review-item">
                    <div className="review-header">
                        <span className="review-rating">
                            {[...Array(3)].map((_, index) => (
                                <svg
                                    key={index}
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 1.29395L8.854 5.04995L13 5.65595L10 8.57795L10.708 12.7059L7 10.7559L3.292 12.7059L4 8.57795L1 5.65595L5.146 5.04995L7 1.29395Z"
                                        fill="#212122"
                                        stroke="#212122"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ))}
                        </span>
                        <span className="review-color">White</span>
                        <span className="review-user">suj*******</span>
                    </div>
                    <div className="review-content">
                        <p className="review-text">
                            크기도 생각했던 대로고 컬러도 고급스러워요. 인테리어용으로도 너무 예쁩니다 !!
                        </p>
                        <div className="review-images">
                            <div className="review-image"></div>
                            <div className="review-image"></div>
                            <div className="review-image"></div>
                        </div>
                        <span className="review-date">2025.02.05</span>
                    </div>
                </div>

                <div ref={qnaSectionRef} className="qna-section">
                    <div className="qna-title-row">
                        <div className="qna-title">상품 Q&A</div>
                        <div className="qna-desc">구매하신 상품에 대해 궁금한 점이 있으신 경우 문의해주세요.</div>
                        <div className="qna-btn-row">
                            <button className="qna-btn">상품 Q&amp;A 작성하기</button>
                            <button className="qna-btn qna-my-btn">나의 Q&amp;A 조회</button>
                        </div>
                    </div>
                    <table className="qna-table">
                        <thead>
                            <tr>
                                <th className="qna-th-status">답변상태</th>
                                <th className="qna-th-title">제목</th>
                                <th className="qna-th-author">작성자</th>
                                <th className="qna-th-date">작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {qnaList.map((item) => (
                                <React.Fragment key={item.id}>
                                    <tr
                                        className="qna-row"
                                        onClick={() => handleRowClick(item.id)}
                                        style={{
                                            cursor: 'pointer',
                                            background: openQnaId === item.id ? '#f6f6f6' : '#fff',
                                        }}
                                    >
                                        <td className="qna-td-status">{item.status}</td>
                                        <td className="qna-td-title">
                                            {item.isSecret && (
                                                <svg
                                                    width="14"
                                                    height="17"
                                                    viewBox="0 0 14 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2.94961 6.0998V5.41409C2.94961 3.13491 4.75604 1.2998 6.99961 1.2998C9.24318 1.2998 11.0496 3.13491 11.0496 5.41409V6.0998M2.94961 6.0998C2.20711 6.0998 1.59961 6.71695 1.59961 7.47123V14.3284C1.59961 15.0827 2.20711 15.6998 2.94961 15.6998H11.0496C11.7921 15.6998 12.3996 15.0827 12.3996 14.3284V7.47123C12.3996 6.71695 11.7921 6.0998 11.0496 6.0998M2.94961 6.0998H11.0496M6.99961 11.6498V9.8498"
                                                        stroke="#6F7174"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                    />
                                                </svg>
                                            )}
                                            <span style={{ whiteSpace: 'pre-line' }}>{item.title}</span>
                                        </td>
                                        <td className="qna-td-author">{item.author}</td>
                                        <td className="qna-td-date">{item.date}</td>
                                    </tr>
                                    {openQnaId === item.id && (
                                        <>
                                            {/* 질문 내용: 제목 칸에만 노출 */}
                                            <tr className="qna-content-row">
                                                <td></td>
                                                <td className="qna-td-question">
                                                    {item.content.split('\n').map((line, idx) => (
                                                        <div key={idx}>{line}</div>
                                                    ))}
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            {/* 답변도 동일하게 제목 칸에만 노출 */}
                                            {item.answer && (
                                                <tr className="qna-answer-row">
                                                    <td></td>
                                                    <td className="qna-td-answer">
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M15.0864 19.8002L20.4004 14.4862M20.4004 14.4862L15.0864 9.17217M20.4004 14.4862H7.60039C5.39126 14.4862 3.60039 12.6953 3.60039 10.4862V4.2002"
                                                                stroke="#8B8F93"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </svg>
                                                        <span className="qna-answer-label">답변</span>
                                                        <span className="qna-answer-content">{item.answer}</span>
                                                    </td>
                                                    <td>
                                                        <span className="qna-answer-author">판매자</span>
                                                    </td>
                                                    <td>
                                                        <span className="qna-answer-date">{item.answerDate}</span>
                                                    </td>
                                                </tr>
                                            )}
                                        </>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
