import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab, setModalOpen } from './reviewSlice';
import './Review.css';

const writableReviews = [
    {
        id: 1,
        title: '스타우브',
        description: '[드리플 단독 컬러] 에스프레소 머신 - 3 colors',
        color: 'white',
        points: '포토 500P 일반 100P',
    },
];

const myReviews = [
    {
        id: 1,
        title: '스타우브',
        description: '[드리플 단독 컬러] 에스프레소 머신 - 3 colors',
        rating: 5,
        reviewText: '컬러가 너무 예뻐요~ 배송도 빠르고 선물해줬는데 너무 좋아하네요~',
        date: '2025.02.12',
    },
    {
        id: 2,
        title: '스타우브',
        description: '[드리플 단독 컬러] 에스프레소 머신 - 3 colors',
        rating: 5,
        reviewText: '컬러가 너무 예뻐요~ 배송도 빠르고 선물해줬는데 너무 좋아하네요~',
        date: '2025.02.12',
    },
];

const Review = () => {
    const dispatch = useDispatch();

    // Redux 상태 사용
    const activeTab = useSelector((state) => state.review.activeTab);
    const isModalOpen = useSelector((state) => state.review.isModalOpen);

    const handleModalOpen = () => dispatch(setModalOpen(true));
    const handleModalClose = () => dispatch(setModalOpen(false));

    return (
        <div className="review">
            <h1>리뷰</h1>

            {/* 탭 메뉴 */}
            <div className="review-tabs">
                <button
                    className={`review-tab ${activeTab === '작성 가능한 리뷰' ? 'active' : ''}`}
                    onClick={() => dispatch(setActiveTab('작성 가능한 리뷰'))}
                >
                    작성 가능한 리뷰 (1)
                </button>
                <button
                    className={`review-tab ${activeTab === '내 리뷰' ? 'active' : ''}`}
                    onClick={() => dispatch(setActiveTab('내 리뷰'))}
                >
                    내 리뷰 (2)
                </button>
            </div>

            {/* 리뷰 리스트 */}
            <div className="review-list">
                {activeTab === '작성 가능한 리뷰' &&
                    writableReviews.map((review) => (
                        <div key={review.id} className="review-item">
                            <div className="review-header">
                                <div className="product-info">
                                    <div className="product-image"></div>
                                    <div className="product-details">
                                        <p className="product-name">{review.title}</p>
                                        <p className="product-description">{review.description}</p>
                                        <p className="product-color">color: {review.color}</p>
                                        <p className="product-points">{review.points}</p>
                                    </div>
                                    <button className="write-review-btn" onClick={handleModalOpen}>
                                        리뷰쓰기
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                {activeTab === '내 리뷰' &&
                    myReviews.map((review) => (
                        <div key={review.id} className="review-item">
                            <div className="review-header">
                                <p className="review-title">{review.title}</p>
                                <p className="review-description">{review.description}</p>
                            </div>
                            <div className="review-content">
                                <p className="review-rating">{'★'.repeat(review.rating)}</p>
                                <p className="review-text">{review.reviewText}</p>
                            </div>
                            <div className="review-footer">
                                <p className="review-date">{review.date}</p>
                                <div className="review-actions">
                                    <button>수정</button>
                                    <button>삭제</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            {/* 모달 */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleModalClose}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-top">
                            <h2>리뷰 작성하기</h2>
                            <button className="close-btn" onClick={handleModalClose}>
                                ×
                            </button>
                        </div>

                        {/* 상품 정보 */}
                        <div className="modal-product-info">
                            <div className="product-image"></div>
                            <div className="product-details">
                                <p className="product-name">스타우브</p>
                                <p className="product-description">[드리플 단독 컬러] 에스프레소 머신 - 3 colors</p>
                                <p className="product-color">color: white</p>
                            </div>
                        </div>

                        {/* 별점 */}
                        <div className="product-rating">
                            <h3>상품을 사용해보셨나요?</h3>
                            <div className="rating-stars">{'★'.repeat(5)}</div>
                            <div className="rating-name"> 5점/최고</div>
                        </div>

                        {/* 리뷰 작성 */}
                        <div className="review-content">
                            <div className="review-content-top">리뷰 작성</div>
                            <textarea placeholder="다른 고객에게 도움이 되도록 솔직한 리뷰를 작성해주세요."></textarea>
                        </div>

                        {/* 파일 첨부 */}
                        <label htmlFor="file-upload" className="file-upload-label">
                            사진/동영상 첨부하기
                        </label>
                        <input type="file" id="file-upload" style={{ display: 'none' }} />

                        {/* 버튼 */}
                        <div className="review-modal-actions">
                            <button class="review-cancel-btn" onClick={handleModalClose}>
                                취소
                            </button>
                            <button class="review-submit-btn">등록</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Review;
