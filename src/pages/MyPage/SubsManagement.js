import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubsManagement.css';

const SubsManagement = () => {
    const navigate = useNavigate();

    // 예시 구독 내역 데이터
    const subscriptions = [
        {
            id: 'ORD20250502-2456784',
            name: '3월 드리플리 박스 [3회차]',
            amount: '21,900원',
            paymentDate: '2025-03-14',
            deliveryDate: '2025-03-20',
        },
        {
            id: 'ORD20250502-49039201',
            name: '2월 드리플리 박스 [2회차]',
            amount: '21,900원',
            paymentDate: '2025-02-14',
            deliveryDate: '2025-02-20',
        },
        {
            id: 'ORD20250502-49039201',
            name: '1월 드리플리 박스 [1회차]',
            amount: '21,900원',
            paymentDate: '2025-01-17',
            deliveryDate: '2025-01-23',
        },
    ];

    // tr 클릭 시 상세 페이지로 이동
    const handleRowClick = (subscriptionId) => {
        navigate(`/mypage/subscription/detail`, {
            state: { subscriptionId },
        });
    };

    return (
        <div className="subs-management">
            <h1>구독 내역</h1>

            {/* 결제카드 정보 영역 */}
            <div className="subs-card-box">
                <span className="subs-card-label">정기 결제카드</span>
                <span className="subs-card-info">****-****-****-1234(현대)</span>
                <button className="subs-card-btn" disabled>
                    결제카드 변경하기
                </button>
            </div>

            <table className="subs-table">
                <thead>
                    <tr>
                        <th>정기구독</th>
                        <th>신청번호</th>
                        <th>결제금액</th>
                        <th>이번 구독 결제일</th>
                        <th>이번 배송 예정일</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {subscriptions.map((sub, index) => (
                        <tr key={index} className="subs-row clickable" onClick={() => handleRowClick(sub.id)}>
                            <td className="subs-name">
                                <div className="subs-thumb" />
                                {sub.name}
                            </td>
                            <td>{sub.id}</td>
                            <td>{sub.amount}</td>
                            <td>{sub.paymentDate}</td>
                            <td>{sub.deliveryDate}</td>
                            <td className="subs-action-group">
                                {index === 0 && (
                                    <>
                                        <button className="subs-action-btn">한달 쉬어가기</button>
                                        <button className="subs-action-btn">구독 해지</button>
                                    </>
                                )}
                                <button className="subs-action-btn subs-action-btn--black">리뷰 작성</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubsManagement;
