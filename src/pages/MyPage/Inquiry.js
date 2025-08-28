import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab, setExpandedRow, setModalOpen } from './inquirySlice';
import './Inquiry.css';

const Inquiry = () => {
    const dispatch = useDispatch();

    // Redux로 상태 관리
    const activeTab = useSelector((state) => state.inquiry.activeTab);
    const expandedRow = useSelector((state) => state.inquiry.expandedRow);
    const isModalOpen = useSelector((state) => state.inquiry.isModalOpen);

    const handleModalOpen = () => dispatch(setModalOpen(true));
    const handleModalClose = () => dispatch(setModalOpen(false));

    const inquiries = [
        {
            id: 1,
            status: '답변완료',
            title: '주문하면 언제 받을 수 있나요?',
            date: '2025.02.01',
            content: '주문 후 배송까지 소요되는 시간이 궁금합니다.',
            reply: '안녕하세요, 주문 후 평균 2~3일 이내에 배송됩니다.',
        },
        {
            id: 2,
            status: '답변완료',
            title: '불에 닿게 되면 변형 되나요?',
            date: '2025.01.14',
            content: '불에 직접 닿으면 제품이 변형될 가능성이 있는지 알고 싶습니다.',
            reply: '안녕하세요, 불에 직접 닿으면 변형될 수 있으니 주의 부탁드립니다.',
        },
        {
            id: 3,
            status: '답변완료',
            title: '오늘 선물로 주문했어요. 수요일까지 배송 받을 수 있는지 확인 부탁드립니다.',
            date: '2025.01.07',
            content: '친구 생일선물로 주문했습니다. 수요일전까지 배송 가능할까요?',
            reply: '안녕하세요, 오늘 발송했고 내일 도착 예정입니다. 감사합니다.',
            reply_date: '2025.01.07',
        },
    ];

    const handleRowClick = (id) => {
        dispatch(setExpandedRow(expandedRow === id ? null : id)); // 클릭된 행을 토글
    };

    return (
        <div className="inquiry">
            <h1>문의</h1>

            {/* 탭 메뉴 */}
            <div className="inquiry-tabs">
                <button
                    className={`inquiry-tab ${activeTab === '1:1 문의내역' ? 'active' : ''}`}
                    onClick={() => dispatch(setActiveTab('1:1 문의내역'))}
                >
                    1:1 문의내역
                </button>
                <button
                    className={`inquiry-tab ${activeTab === '상품 Q&A내역' ? 'active' : ''}`}
                    onClick={() => dispatch(setActiveTab('상품 Q&A내역'))}
                >
                    상품 Q&A내역
                </button>
            </div>

            {/* 리스트 헤더 */}
            <div className="inquiry-header">
                <p className="header-status">답변상태</p>
                <p className="header-title">제목</p>
                <p className="header-date">작성일</p>
            </div>

            {/* 문의 리스트 */}
            <div className="inquiry-list">
                {activeTab === '상품 Q&A내역' &&
                    inquiries.map((inquiry) => (
                        <div key={inquiry.id} className={`inquiry-item ${expandedRow === inquiry.id ? 'active' : ''}`}>
                            {/* 행 */}
                            <div className="inquiry-row" onClick={() => handleRowClick(inquiry.id)}>
                                <p className="status">{inquiry.status}</p>
                                <p className="title">{inquiry.title}</p>
                                <p className="date">{inquiry.date}</p>
                            </div>

                            {/* 문의 내용 및 답변 (행이 클릭되었을 때 표시) */}
                            {expandedRow === inquiry.id && (
                                <div className="expanded-content">
                                    <div className="content-row">
                                        <p className="status"></p>
                                        <p className="exp-content">{inquiry.content}</p>
                                        <p className="date"></p>
                                    </div>
                                    <div className="reply-row">
                                        <p className="status"></p>
                                        <p className="reply-content">
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.80055 10.5502L10.9004 7.45036M10.9004 7.45036L7.80055 4.35052M10.9004 7.45036H3.43373C2.14506 7.45036 1.10039 6.40569 1.10039 5.11702V1.4502"
                                                    stroke="#8B8F93"
                                                    stroke-width="1.16667"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            <svg
                                                width="45"
                                                height="28"
                                                viewBox="0 0 45 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect width="45" height="28" fill="#8B8F93" />
                                                <path
                                                    d="M19.9941 7.95312V10.8105H21.8262V11.7129H19.9941V14.4336H18.9277V7.95312H19.9941ZM16.4531 8.75977V9.64844H12.1328V13.1211C14.5732 13.1211 15.9609 13.0459 17.5879 12.7109L17.7246 13.5996C16.0156 13.9414 14.5664 14.0234 12.0098 14.0234H11.0664V8.75977H16.4531ZM13.3633 15.0898V16.6074H18.9277V15.0898H19.9941V19.9023H12.2969V15.0898H13.3633ZM13.3633 19.0137H18.9277V17.4688H13.3633V19.0137ZM32.528 7.9668V16.9629H31.4479V13.6953H28.5768V14.8848H23.067V8.77344H24.1334V10.9336H27.5241V8.77344H28.5768V10.1953H31.4479V7.9668H32.528ZM32.8014 18.9453V19.8477H24.6666V16.0742H25.7467V18.9453H32.8014ZM24.1334 13.9961H27.5241V11.7812H24.1334V13.9961ZM28.5768 12.8066H31.4479V11.0977H28.5768V12.8066Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            {inquiry.reply}
                                        </p>

                                        <p className="date">{inquiry.reply_date}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                {activeTab === '1:1 문의내역' && (
                    <p>작성 가능한 1:1 문의가 없습니다.</p> /* 작성 가능한 데이터 추가 가능 */
                )}

                {isModalOpen && (
                    <div className="inquiry-modal-overlay" onClick={handleModalClose}>
                        <div className="inquiry-modal-content" onClick={(e) => e.stopPropagation()}>
                            {/* 모달 헤더 */}
                            <div className="inquiry-modal-header">
                                <h2>1:1 문의하기</h2>
                                <button className="inquiry-close-btn" onClick={handleModalClose}>
                                    ×
                                </button>
                            </div>

                            {/* 제목 입력 */}
                            <label htmlFor="inquiry-title-input" className="inquiry-label">
                                제목
                            </label>
                            <input
                                id="inquiry-title-input"
                                type="text"
                                placeholder="제목을 입력해주세요"
                                className="inquiry-input"
                            />

                            {/* 내용 입력 */}
                            <label htmlFor="inquiry-content-input" className="inquiry-label">
                                내용
                            </label>
                            <textarea
                                id="inquiry-content-input"
                                placeholder="내용을 입력해주세요."
                                className="inquiry-textarea"
                            ></textarea>

                            {/* 파일 첨부 */}
                            <label htmlFor="inquiry-file-upload" className="inquiry-file-upload-label">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.19714 21.4343L15.2557 12.9086L19.5186 17.1714M6.19714 21.4343H16.8543C18.62 21.4343 20.0514 20.0029 20.0514 18.2371V12.9086M6.19714 21.4343C4.43141 21.4343 3 20.0029 3 18.2371V7.58001C3 5.81427 4.43141 4.38287 6.19714 4.38287H13.1243M18.9857 9.52859L18.9857 6.51429M18.9857 6.51429L18.9857 3.5M18.9857 6.51429L15.9714 6.51429M18.9857 6.51429L22 6.51429M9.39428 9.17858C9.39428 10.0614 8.67858 10.7771 7.79571 10.7771C6.91285 10.7771 6.19714 10.0614 6.19714 9.17858C6.19714 8.29571 6.91285 7.58001 7.79571 7.58001C8.67858 7.58001 9.39428 8.29571 9.39428 9.17858Z"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                사진/동영상 첨부하기
                            </label>
                            <input type="file" id="inquiry-file-upload" style={{ display: 'none' }} />

                            {/* 첨부된 파일 미리보기 */}
                            <div className="inquiry-file-preview">
                                <div className="inquiry-preview-item">
                                    <div className="inquiry-preview-image"></div>
                                    <button className="inquiry-delete-preview-btn">×</button>
                                </div>
                            </div>

                            {/* 모달 버튼 */}
                            <div className="inquiry-modal-actions">
                                <button onClick={handleModalClose} className="inquiry-cancel-btn">
                                    취소
                                </button>
                                <button className="inquiry-submit-btn">등록</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {activeTab === '1:1 문의내역' && (
                <div class="inquiry-button-container">
                    <button className="inquiry-button" onClick={handleModalOpen}>
                        1:1 문의하기
                    </button>
                </div>
            )}

            {/* 페이지네이션 */}
            {activeTab === '상품 Q&A내역' && (
                <div className="pagination">
                    <span>1</span>
                </div>
            )}
        </div>
    );
};

export default Inquiry;
