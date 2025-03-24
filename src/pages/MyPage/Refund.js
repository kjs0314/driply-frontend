import React from 'react';
import './Refund.css';

const Refund = () => {
    const refundData = [
        {
            type: '취소',
            orderNumber: 'ORD20250502-2456784',
            subject: '선물하기 기간 만료',
            receivedDate: '2025-02-26',
            status: '취소완료',
            completedDate: '2025-02-26',
        },
        {
            type: '반품',
            orderNumber: 'ORD20250502-11144456',
            subject: '상품 하자 반품 접수 요청',
            receivedDate: '2025-02-13',
            status: '반품완료',
            completedDate: '2025-02-13',
        },
        {
            type: '반품',
            orderNumber: 'ORD20250502-49039201',
            subject: '반품',
            receivedDate: '2025-02-01',
            status: '반품완료',
            completedDate: '2025-02-01',
        },
    ];

    return (
        <div className="refund-section">
            <h1>취소/반품/교환내역</h1>
            <table className="refund-table">
                <thead>
                    <tr>
                        <th>CS처리구분</th>
                        <th>주문번호</th>
                        <th>접수제목</th>
                        <th>접수일자</th>
                        <th>진행상태</th>
                        <th>완료일자</th>
                    </tr>
                </thead>
                <tbody>
                    {refundData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.type}</td>
                            <td>{item.orderNumber}</td>
                            <td>{item.subject}</td>
                            <td>{item.receivedDate}</td>
                            <td>{item.status}</td>
                            <td>{item.completedDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Refund;
