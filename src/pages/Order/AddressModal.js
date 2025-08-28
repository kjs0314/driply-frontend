import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedAddress } from './orderSlice';
import './AddressModal.css';

const AddressModal = ({ onClose }) => {
    const dispatch = useDispatch();

    const addressList = [
        {
            id: 1,
            name: '홍길동',
            note: '',
            address: '서울 강남구 역삼동 111-2 가나다라 아파트, 107동 2304호',
            phone: '010-1234-5678',
            isDefault: true,
        },
        {
            id: 2,
            name: '회사',
            note: '',
            address: '서울 강남구 역삼동 43-3, @@빌딩 1301호',
            phone: '010-1234-5678',
            isDefault: false,
        },
        {
            id: 3,
            name: '짱구네(친구)',
            note: '',
            address: '인천 연수구 센트럴로 415(송도동, 힐스테이트 송도 더테라스) 101동 2701호',
            phone: '010-1234-5678',
            isDefault: false,
        },
    ];

    const handleSelect = (addr) => {
        dispatch(setSelectedAddress(addr)); // Redux에 선택된 주소 저장
        onClose(); // 모달 닫기
    };

    return (
        <div className="addr-modal-backdrop">
            <div className="addr-modal-container">
                <div className="addr-modal-header">
                    <span>배송지 변경</span>
                    <button className="addr-modal-close-btn" onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className="addr-modal-list">
                    {addressList.map((addr) => (
                        <div className="addr-card" key={addr.id}>
                            <div className="addr-card-main">
                                <span className="addr-card-title">
                                    {addr.name}
                                    {addr.isDefault && <span className="addr-card-default">기본배송지</span>}
                                </span>
                                <div className="addr-card-address">{addr.address}</div>
                                <div className="addr-card-phone">홍길동 {addr.phone}</div>
                            </div>
                            <div className="addr-card-controls">
                                <button className="addr-card-btn">삭제</button>
                                <button className="addr-card-btn">수정</button>
                                <button
                                    className="addr-card-btn addr-card-select-btn"
                                    onClick={() => handleSelect(addr)}
                                >
                                    선택
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="addr-modal-add-btn">배송지 추가</button>
            </div>
        </div>
    );
};

export default AddressModal;
