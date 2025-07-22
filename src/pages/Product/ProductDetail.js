import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState('상품 상세');

    const navigate = useNavigate();
    // const { id } = useParams(); // /product/:id 경로에서 id 추출

    const handleBuy = () => {
        navigate(`/product/1/order`);
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
                        <select id="option-select">
                            <option value="">선택해주세요</option>
                            {/* 옵션 추가 */}
                            <option value="option1">옵션 1</option>
                            <option value="option2">옵션 2</option>
                        </select>
                    </div>

                    {/* 추가 구성 선택 */}
                    <div className="additional-config">
                        <label htmlFor="additional-select">추가 구성:</label>
                        <select id="additional-select">
                            <option value="">선택해주세요</option>
                            {/* 추가 구성 옵션 */}
                            <option value="config1">구성 1</option>
                            <option value="config2">구성 2</option>
                        </select>
                    </div>

                    {/* 총 상품 금액 및 장바구니 버튼 */}
                    <div className="total-price">
                        총 상품 금액: <strong>0원</strong>
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
                    onClick={() => setActiveTab('상품 상세')}
                >
                    상품 상세
                </div>
                <div
                    className={`tab-item ${activeTab === '구매 정보' ? 'active' : ''}`}
                    onClick={() => setActiveTab('구매 정보')}
                >
                    구매 정보
                </div>
                <div
                    className={`tab-item ${activeTab === '리뷰' ? 'active' : ''}`}
                    onClick={() => setActiveTab('리뷰')}
                >
                    리뷰
                </div>
                <div
                    className={`tab-item ${activeTab === '상품 Q&A' ? 'active' : ''}`}
                    onClick={() => setActiveTab('상품 Q&A')}
                >
                    상품 Q&A
                </div>
            </div>

            {/* 탭 내용 */}
            <div className="tab-content"></div>

            {/* 상품정보 보기 섹션 */}
            <div className="info-section-container">
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
            <div className="review-section">
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
            </div>
        </div>
    );
};

export default ProductDetail;
